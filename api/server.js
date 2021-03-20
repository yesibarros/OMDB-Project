// server configs

// server configs
require("./config/index");

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const cors = require("cors");
const path = require("path");
const LocalStrategy = require("passport-local").Strategy;
const app = express();
const { User } = require("./models");

const routes = require("./routes/index");
app.use(cookieParser());
// Express Route File Requires

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "../public"));

app.use(morgan("dev"));

app.use(helmet());


app.use(
  sessions({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },

    function (email, password, done) {
      
      User.findOne({ email: email })
        .then((user) => {
        
          if (!user) {
        
            return done(null, false);
          }
           
         return user.hash(password, user.salt)

          .then((hash) => {
            
            
            if (hash !== user.password) {
            
              return done(null, false);
            }
           
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findOne({ _id: id })
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes);
// // Express Routing

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(5000, () => console.log("listenning on port 5000"));
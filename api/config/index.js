const mongoose = require("mongoose");

// Mongoose connection
mongoose.connect("mongodb://localhost/omdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


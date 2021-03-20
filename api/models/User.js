const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;





const userSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  surname: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  salt: {
    type: String,
  },

   favorites:[{
        type: Schema.Types.ObjectId, ref: 'favorites',
        }]

  },
);


    
    userSchema.pre ("save",function(next){
      const user = this
      return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, salt);
      })
      .then((hash) => {
        user.password = hash;
        next()
      });
      
      
    }); 
    
    userSchema.methods.hash=function(password, salt){
      return bcrypt.hash(password, salt);
    }
  
  
  const User = mongoose.model("user", userSchema);
  module.exports = User;
  
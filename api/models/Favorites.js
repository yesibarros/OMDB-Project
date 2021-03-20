const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    // required: true,
  },
  poster: {
    type: String,
    // required: true,
  },
});

const Favorites = mongoose.model("favorites", schema);




module.exports = Favorites;
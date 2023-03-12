const mongoose = require("mongoose");

const toursSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a toure name"],
    trim: true,
    unique: [true, "Tour name must be unique!"],
    minLength: [3, "Name al least 3 char"],
    maxLength: [50, "Name to learg"],
  },
  description: {
    type: String,
    required: true,
    minLenght: [5, "Description at lest 5 char"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can't be nagative"],
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Tours = mongoose.model("Tours", toursSchema);

module.exports = Tours;

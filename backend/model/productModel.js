const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  regularprice: {
    type: Number,
    required: true,
  },
  saleprice: {
    type: Number,
  },
  slug: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);

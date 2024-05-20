const mongoose = require("mongoose");
const { Schema } = mongoose;

const discountSchema = new Schema({
  cupon: {
    type: String,
    required: true,
    unique: true,
  },
  cupontype: {
    type: String,
    required: true,
    unique: true,
  },
  cuponamount: {
    type: Number,
    required: true,
  },
  cuponrang: {
    type: Number,
    required: true,
  },



  
});

module.exports = mongoose.model("Cupon", discountSchema);

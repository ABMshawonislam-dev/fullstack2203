const mongoose = require("mongoose");
const { Schema } = mongoose;

const catSubSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  
  categoryId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  status: {
    type: String,
    enum: ["waiting", "rejected", "approved"],
    default: "waiting",
  },
});

module.exports = mongoose.model("Subcategory", catSubSchema);

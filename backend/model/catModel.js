const mongoose = require("mongoose");
const { Schema } = mongoose;

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  status: {
    type: String,
    enum: ["waiting", "rejected", "approved"],
    default: "waiting",
  },
});

module.exports = mongoose.model("Category", catSchema);

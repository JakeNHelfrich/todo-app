const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: String,
    isCompleted: { type: Boolean, default: false },
  },
  { collection: "todo" }
);

module.exports = mongoose.model("todo", todoSchema);

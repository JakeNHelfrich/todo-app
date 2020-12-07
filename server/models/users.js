const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Password will be hashed
});

module.exports = mongoose.model("todo", userSchema);

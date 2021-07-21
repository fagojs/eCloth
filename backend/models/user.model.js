const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: { type: String, required },
  email: { type: String, required },
  password: { type: String, required },
});

module.exports = mongoose.model("Users", userSchema);

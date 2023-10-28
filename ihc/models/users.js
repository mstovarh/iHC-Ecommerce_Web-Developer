const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  emailCheck: String,
  passwordCheck: String,
});

const User = mongoose.model('User', usersSchema);

module.exports = User;

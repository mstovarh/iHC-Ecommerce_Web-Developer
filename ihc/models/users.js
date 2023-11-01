const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 1,
    max: 20,
  },
  lastname: {
    type: String,
    require: true,
    min: 1,
    max: 20,
  },
  email: {
    type: String,
    require: true,
    min: 7,
    max: 30,
  },
  password: {
    type: String,
    require: true,
    min: 8,
    max: 20,
  }, 
  emailCheck: {
    type: String,
    require: true,
    min: 7,
    max: 30,
  },
  passwordCheck: {
    type: String,
    require: true,
    min: 8,
    max: 20,
  }
});

const User = mongoose.model('User', usersSchema);

module.exports = User;

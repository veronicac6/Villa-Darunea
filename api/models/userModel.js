const mongoose = require('mongoose');
// const Schema=mongoose.Schema;

// User Schema
const UserSchema = mongoose.Schema({
  nume: {
    type: String
  },
  email: {
    type: String,
    requiered: true
  },
  username: {
    type: String,
    requiered: true
  },
  password: {
    type: String,
    requiered: true
  }
});

// Using the User model from outside
module.exports = mongoose.model('User', UserSchema);

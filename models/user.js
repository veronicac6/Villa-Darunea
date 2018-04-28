const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
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
const User = module.exports = mongoose.model('User', UserSchema);

// Function to call the user by id  from outside
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback); // findById- mongoose function
}

// Funtion to call the user by username  from outside
module.exports.getUserByUsername = function(username, callback) {
  const query = {
    username: username
  }; //iniatiate object
  User.findOne(query, callback); // findOne takes query
}
// JWT Hash
module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

// Create comparePassword method in the models
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err)  return callback(err);
    callback(null, isMatch);
  });
}

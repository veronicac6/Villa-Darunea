'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/database');
const User = require('../models/userModel');

// (1) Function getUserById
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback); // findById- mongoose function
}

// (2) Funtion getUserByUsername
module.exports.getUserByUsername = function(username, callback) {
  const query = {
    username: username
  }; //iniatiate object
  User.findOne(query, callback); // findOne takes query
}

// (3) JWT Hash / Function addUser
module.exports.addUser = function(newUser, callback) {

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

// (4) Function comparePassword
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
}

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken'); //makes sure the users are authenticated through authentification service
const config = require('../config/database');

const User = require('../models/user'); // bring in the model

// Register route
router.post('/register', function(req, res, next) {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password // plain text password
  });

  //Add user in the database
  User.addUser(newUser, function(err, user) {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to register user'
      });
    } else {
      res.json({
        success: true,
        msg: 'User registered'
      });
    }
  });
});

// Authenticate route
router.post('/authenticate', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  // Checking username
  User.getUserByUsername(username, function(err, user) {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: "User not found"
      });
    }

    // If exists we will match the password of input and passport in db
    User.comparePassword(password, user.password, function(err, isMatch) {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week in seconds
        });
        // If match we wil send this response
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
        // If does not match, we will send this response
      } else {
        return res.json({
          success: false,
          msg: "Wrong password"
        });
      }
    });
  });
});

// Profile route
router.get('/profile', passport.authenticate('jwt', {
    session: false
  }),
  function(req, res, next) { // protects the route
    res.json({
      user: req.user
    });
  });

module.exports = router;

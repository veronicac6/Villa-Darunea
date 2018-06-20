const config = require('../../config/database');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../controllers/userController'); // bring in the controller
const UserSchema= require('../models/userModel');

//http://localhost:3000/users/register
router.post('/register', function(req, res, next) {
  let newUser = new UserSchema({
    name: req.body.name,
    surname:req.body.surname,
    email: req.body.email,
    contactNumber:req.body.contactNumber,
    username: req.body.username,
    password: req.body.password, // plain text password
    reservations:req.body.reservations,
    role:req.body.role
  });
  console.log(newUser);
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


//  http://localhost:3000/users/authenticate
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
    // If exists we will match the password of input and password in db
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
            username: user.username,
            email: user.email
          }
        });
      } else { // If !isMatch
        return res.json({
          success: false,
          msg: "Wrong password"
        });
      }
    });
    //end comparePassword
  });
  //end getUserByUsername
});
//end /authenticate


// http://localhost:3000/users/profile
router.get('/profile', passport.authenticate('jwt', {
    session: false
  }),
  function(req, res, next) { // protects the route
    res.json({
      user: req.user
    });
  });


module.exports = router;

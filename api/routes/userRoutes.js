const config = require('../../config/database');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../controllers/userController'); // bring in the controller
const UserSchema = require('../models/userModel');
const HttpRequestsSchema = require('../models/httpRequestsModel');

//http://localhost:3000/users/register
router.post('/register', function(req, res, next) {
  let newUser = new UserSchema({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    username: req.body.username,
    password: req.body.password, // plain text password
    // reservations: req.body.reservations,
    role: req.body.role,
    sex: req.body.sex,
    country: req.body.country
  });
  // console.log(newUser);
  //Add user in the database
  User.addUser(newUser, function(err, user) {
    if (err) {
      if (err.name === 'BulkWriteError' && err.code === 11000) {
        res.json({
          success: false,
          msg: 'This email address or username is already used, please another one'
        });
        // console.log(err.errmsg)
      } else res.json({
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

  HttpRequestsSchema.update({
    _id: '5b41e48f541620633004f5ee'
  }, {
    $inc: {
      'requests': 1
    }
  }, (err, doc) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else
      console.log("HttpAdress 5b41e48f541620633004f5ee was successfully incremented!");
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
            email: user.email,
            role: user.role
          },
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

  HttpRequestsSchema.update({
    _id: '5b41e419541620633004f5ed'
  }, {
    $inc: {
      'requests': 1
    }
  }, (err, doc) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else
      console.log("HttpAdress 5b41e419541620633004f5ed was successfully incremented!");
  });
  //end getUserByUsername
});
//end /authenticate

//-------------------------------------------------
// http://localhost:3000/users/profile
router.get('/profile', passport.authenticate('jwt', {
    session: false
  }),
  function(req, res, next) { // protects the route
    res.json({
      user: req.user
    });
  });

//------------------------------------------------
// http://localhost:3000/users/show
router.get('/show', (req, res) => {
  UserSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      res.send(err.errmsg);
    }
    if (docs)
      res.send(docs);
  }).populate({
    path: 'reservations',
    populate: {
      path: 'room',
      select: 'name path'
    }
  });
});

//------------------------------------------------
// http://localhost:3000/users/show/:id
router.get('/show/:id', (req, res) => {
  let id = req.params.id;
  UserSchema.findOne({
      _id: id
    }, (err, docs) => {
      if (err) {
        console.log('/show/:id | GET | Error was occurred');
        res.send(err.errmsg);
      }
      if (docs)
        res.send(docs);
    })
    .populate({
      path: 'reservations',
      populate: {
        path: 'room',
        select: 'name path price'
      }
    });
});


//-----------------------------------------------------
// http://localhost:3000/users/update/:id
router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let userData = req.body;
  // console.log(userData);
  UserSchema.update({
    _id: id
  }, userData, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else
      res.json({
        msg: "User " + id + " successfully updated!"
      });
  });
});

module.exports = router;

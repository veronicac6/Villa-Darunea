'use strict';

const mongoose = require('mongoose');
const config = require('../../config/database');

const HttpRequestsSchema=mongoose.Schema({
  address:{
    type:String,
    requiered:true
  },
  requests:{
    type:Number,
    default:0
  }
});

// Using the  models from outside
module.exports = mongoose.model('httpRequests', HttpRequestsSchema);

'use strict';

const config = require('../../config/database');
var Rezervare = require('../models/rezervareModel');

// // (1)
// //
// module.exports.save = function(entity) {
//   getRoomModel().update({
//     _id: entity.room
//   }, {
//     $inc: {
//       free = -1
//     }
//   }).exec();
// };
//
// // (2)
// //
// module.exports.remove = function(entity) {
//   if (entity.status) {
//     getRoomModel().update({
//       _id: entity.room
//     }, {
//       $inc: {
//         free: 1
//       }
//     }).exec();
//   }
// };
//
// // ReservationSchema
// //   .post('save', function(entity) {
// //     getRoomModel().update({
// //       _id: entity.room
// //     }, {
// //       $inc: {
// //         free: -1
// //       }
// //     }).exec();
// //   })
// //   .post('remove', function(entity) {
// //     console.log('ReservationSchema.postRemove');
// //     if (entity.status) {
// //       getRoomModel().update({
// //         _id: entity.room
// //       }, {
// //         $inc: {
// //           free: 1
// //         }
// //       }).exec();
// //     }
// //   });
//

const config = require('../../config/database');
const express = require('express');
const router = express.Router();
const ClientSchema = require('../models/clientModel');


//  http://localhost:3000/clienti/new
router.post('/new', (req, res) => {

  let clientNou = new ClientSchema({
    nume: req.body.nume,
    prenume: req.body.prenume,
    email: req.body.email,
    telefon: req.body.telefon
  });

  clientNou.save((err, user) => {
    if (err) {
      res.json({
        succes: false,
        msg: 'Failed to add client'
      });
    } else {
      res.json({
        succes: true,
        msg: 'Client added succesfully'
      });
    }
  });
});

//(2) http://localhost:3000/clienti/show
//
router.get('/show', (req, res,next) => {
  ClientSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      res.send(err.errmsg);
    }
    if (docs)
    res.json(docs);
  });
});


//http://localhost:3000/clienti/show/:id
router.get('/show/:id', (req, res) => {
  let id = req.params.id;
  ClientSchema.findOne({
    _id: id
  }, (err, doc) => {
    if (err) {
      console.log('/show/:id | GET | Erros was occured');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else
      res.send(doc);
  });
});

//http://localhost:3000/clienti/delete/:id
router.delete('/delete/:id', (req, res) => {
  let id = req.params.id;

  ClientSchema.remove({
    _id: id
  }, (err, doc) => {
    if (err) {
      console.log('/delete/:id | DELETE | Erros was occured');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else if (doc)
      res.send("Client " + id + " was deleted!");
  });
});

// http://localhost:3000/clienti/update/:id
router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let clientData = req.body;

  ClientSchema.update({
    _id: id
  }, clientData, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      response.send(err.errmsg);
    } else
      res.send(res.send("Client " + id + " successfully updated!"));
  });
});

module.exports = router;

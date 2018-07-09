// Initializing our dependencies/modules
const bodyParser = require('body-parser'); // it parses incoming request body, when you submit a form, you can grap the data and save it in database
const config = require('./config/database');
const cors = require('cors'); // it allows to make a request to our API from a different domain name
const express = require('express');
const path = require('path'); // system module
const passport = require('passport');
const mongoose = require('mongoose');

// Initializing the app (server) variable with express
const app = express();

//API file for routes
const users = require('./api/routes/userRoutes');
const rooms = require('./api/routes/roomRoutes');
const reservations = require('./api/routes/reservationRoutes');
const villas = require('./api/routes/villaRoutes');
const httpRequests = require('./api/routes/httpRequestsRoutes');
// const clienti=require('./api/routes/clientiRoutes');

// Port number
const port = 3000;

// Starts server
app.listen(port, function() {
  console.log("Server started on port " + port);
});

// CORS Middleware
app.use(cors()); // matches the port 3000 of server and port 4200 of the client

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);
app.use('/rooms', rooms);
app.use('/reservations', reservations);
app.use('/villas', villas);
app.use('/httpRequests', httpRequests);
// app.use('/clienti',clienti);

// Set Static Angular output folder
app.use(express.static(path.join(__dirname, 'public'))); //  the directory name of the current file

//Passport Middleware- get the token system working to protect certain  routes
app.use(passport.initialize());
app.use(passport.session());

// Index route
app.get('/', function(req, res) {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//DATABASE
// Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', function() {
  console.log('Connected to database ' + config.database);
});

// On error
mongoose.connection.on('error', function(err) {
  console.log('Database error: ' + err);
});
//DATABASE END

//Passport configuaration in passport.js
require('./config/passport')(passport);

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const dotenv = require('dotenv');

//Enabling ENV
dotenv.config();

// Import base routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const tweetRouter = require('./routes/tweets');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://Paradigma:Paradigma@localhost/unict-innovation');

const db = mongoose.connection;
db.on('error', function() {
  console.error('Connection error!')
});
db.once('open', function() {
  console.log('DB connected. Ready.');
});

// Init express app
const app = express();

// Enable CORS
app.use(cors())

// Enable uploads up to 50mb
app.use(express.json({limit: '50mb'}));

// Setup logger and body parser
app.use(morgan('dev'));
app.use(bodyParser.json());

// Setup static public folder
app.use(express.static(path.join(__dirname, 'public')));

// Setup base routes
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/tweets', tweetRouter);

// Catch 404 errors
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
// // // // // // // // // // // // 
//
//	Server 
//
// // // // // // // // // // // // 

'use strict';

const express          = require('express'),
      morgan           = require('morgan'),
      bodyParser       = require('body-parser'),
      cookieParser     = require('cookie-parser'),
      path             = require('path'),
      engine           = require('ejs-mate');

const router   = require('routes');
const { PORT } = require('./config');

// create express app instance
const app = express();


// CONFIGURE APP

// templating 
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// root folder for static files
app.use(express.static(path.join(__dirname, 'public'))); 


// MIDDLEWARE

// C.O.R.S.
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

app.use(morgan('common')); // log the http layer
app.use(cookieParser()); // parses and handles cookies
app.use(bodyParser.json()); // parses request and exposes it on req.body
app.use(bodyParser.urlencoded({ extended: true }));



// ROUTES
app.use(router);


// fallback error message for all non-existent endpoints
app.use('*', (req, res) => {
    res.status(404).json({message: 'Not Found'});
});

// * * * * * * * * * * * * * * * * * * 
//	Start server
// * * * * * * * * * * * * * * * * * * 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
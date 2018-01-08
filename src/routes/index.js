// // // // // // // // // // // // 
//
//	Routes
//
// // // // // // // // // // // // 

'use strict';

const express                       = require('express'),
      bodyParser                    = require('body-parser'),                 
      { checkSessionCookieVisited } = require('services/cookie-check');
      
const router = express.Router();
      


router.use(bodyParser.urlencoded({ extended: true }));


// controllers
const mainController = require('controllers/mainController');


router.get('/', mainController.getIndex);


module.exports = router;

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
const mainController         = require('controllers/mainController'),
      whoWeAreController     = require('controllers/whoWeAreController'),
      trustRespectController = require('controllers/trustRespectController');

const projectRouter = require('./projectRouter');

// HOME
router.get('/', mainController.getIndex);

// Who We Are
router.get('/who-we-are', whoWeAreController.getWhoWeAre);

// Projects
router.use('/projects', projectRouter);

// Trust & Respect
router.get('/trust-respect', trustRespectController.getTestimonials);

// Contact Us
router.get('/contact-us', mainController.getContactUs);

module.exports = router;

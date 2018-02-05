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
const mainController     = require('controllers/mainController');
const whoWeAreController = require('controllers/whoWeAreController');

// HOME
router.get('/', mainController.getIndex);

// Who We Are
router.get('/who-we-are', whoWeAreController.getWhoWeAre);
// Projects
router.get('/projects', mainController.getProjects);
// Trust & Respect
router.get('/trust-respect', mainController.getTestimonials);
// Contact Us
router.get('/contact-us', mainController.getContactUs);

module.exports = router;

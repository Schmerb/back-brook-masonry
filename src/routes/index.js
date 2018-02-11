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
      trustRespectController = require('controllers/trustRespectController');

const projectRouter  = require('./projectRouter');
const whoWeAreRouter = require('./whoWeAreRouter');

// HOME
router.get('/', mainController.getIndex);

// Who We Are
router.use('/who-we-are', whoWeAreRouter);

// Projects
router.use('/projects', projectRouter);

// BIM
router.get('/BIM', mainController.getBIM);
router.get('/BIM/:example', mainController.getBIMExample);

// Trust & Respect
router.get('/trust-respect', trustRespectController.getTestimonials);

// Contact Us
router.get('/contact-us', mainController.getContactUs);

module.exports = router;

// // // // // // // // // // // // 
//
// Who We Are Router
//
// // // // // // // // // // // // 

'use strict';

const express    = require('express'),
      bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

const whoWeAreController = require('controllers/whoWeAreController');


router.get('/', whoWeAreController.getWhoWeAre);
router.get('/safety', whoWeAreController.getSafetyPage);
router.get('/bonding', whoWeAreController.getBondingPage);

module.exports = router;

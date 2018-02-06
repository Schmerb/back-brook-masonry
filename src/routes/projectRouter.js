// // // // // // // // // // // // 
//
//	Project Router
//
// // // // // // // // // // // // 

'use strict';

const express    = require('express'),
      bodyParser = require('body-parser'); 

const projectsController = require('controllers/projectsController');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', projectsController.getProjectsPage)


module.exports = router;
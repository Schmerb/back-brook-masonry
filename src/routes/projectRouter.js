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

router.get('/', projectsController.getProjectsPage);
router.get('/all/json', projectsController.getAllProjects) // Needs to come before other routes

router.get('/:categoryType', projectsController.getProjectCategory);
router.get('/:categoryType/:projectName', projectsController.getProjectDetailPage);

module.exports = router;
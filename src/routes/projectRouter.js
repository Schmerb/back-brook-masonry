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
router.get('/:categoryType', projectsController.getProjectCategory);
router.get('/all/json', projectsController.getAllProjects)

module.exports = router;
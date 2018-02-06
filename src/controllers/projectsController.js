// // // // // // // // // // // // 
//
//	Who We Are Controller
//
// // // // // // // // // // // // 

'use strict';

const { categories } = require('utils/projects');

exports.getProjectsPage = (req, res) => {
    res.status(200).render('pages/projects', {
        categories,
        landing: false,
        path: 'projects'
    });
};

// // // // // // // // // // // // 
//
//	Who We Are Controller
//
// // // // // // // // // // // // 

'use strict';

const { categories, projects } = require('utils/projects');

// All Categories
exports.getProjectsPage = (req, res) => {
    res.status(200).render('pages/projects/index', {
        categories,
        landing: false,
        path: 'projects'
    });
};

// All projects by category
exports.getProjectCategory = (req, res) => {
    const { category } = req.params;
    const categoryTitle = `${category.slice(0,1).toUpperCase()}${category.slice(1)}`;
    res.status(200).render('pages/projects/category-page', {
        categoryTitle,
        projects,
        landing: false,
        path: `projects/${category}`
    });
};

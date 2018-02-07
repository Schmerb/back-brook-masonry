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
        projects,
        landing: false,
        path: 'projects'
    });
};

// All projects by category
exports.getProjectCategory = (req, res) => {
    const { categoryType } = req.params;
    const categoryTitle = `${categoryType.slice(0,1).toUpperCase()}${categoryType.slice(1)}`;
    const categoryObj   = categories.find((category) => category.url.includes(categoryType));
    res.status(200).render('pages/projects/category-page', {
        categoryTitle,
        categoryObj,
        categories,
        projects,
        landing: false,
        path: `projects/${categoryType}`
    });
};

exports.getAllProjects = (req, res) => {
    res.status(200).json({ projects });
}

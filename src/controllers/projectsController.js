// // // // // // // // // // // // 
//
//	Who We Are Controller
//
// // // // // // // // // // // // 

'use strict';

const { categories, projects } = require('utils/projects');

// All projects as JSON
exports.getAllProjects = (req, res) => {
    res.status(200).json({ projects });
}

// All Categories
exports.getProjectsPage = (req, res) => {
    res.status(200).render('pages/projects/index', {
        categories,
        projects,
        landing: false,
        path: '/projects'
    });
};

// All projects by category
exports.getProjectCategory = (req, res) => {
    const { categoryType } = req.params;
    const categoryTitle = `${categoryType.slice(0,1).toUpperCase()}${categoryType.slice(1)}`,
          categoryObj   = categories.find((category) => category.url.includes(categoryType));
    res.status(200).render('pages/projects/category-page', {
        categoryTitle,
        categoryObj,
        categories,
        projects,
        landing: false,
        path: categoryObj.url
    });
};

exports.getProjectDetailPage = (req, res) => {
    const { categoryType, projectName } = req.params;
    const categoryObj = categories.find((category) => category.url.includes(categoryType)),
          projectObj  = projects.find((project) => project.url.includes(projectName));
    res.status(200).render('pages/projects/project-detail-page', {
        categories,
        projects,
        projectObj,
        categoryType,
        landing: false,
        path: projectObj.url
    });
}



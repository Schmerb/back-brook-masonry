// // // // // // // // // // // // 
//
//	Main Controller
//
// // // // // // // // // // // // 

'use strict';

const { request } = require('request')

exports.getIndex = (req, res) => {
    res.status(200).render('index', {
        landing: true,
        path: '/'
    });
};

exports.getProjects = (req, res) => {
    res.status(200).render('pages/projects', {
        landing: false,
        path: '/projects'
    });
};

exports.getContactUs = (req, res) => {
    res.status(200).render('pages/contact-us', {
        landing: false,
        path: '/contact-us'
    });
};

// // // // // // // // // // // // 
//
//	Main Controller
//
// // // // // // // // // // // // 

'use strict';

const { request } = require('request')

exports.getIndex = (req, res) => {
    res.status(200).render('index', {
        landing: true
    });
};



exports.getProjects = (req, res) => {
    res.status(200).render('pages/projects', {
        landing: false
    });
};

exports.getTestimonials = (req, res) => {
    res.status(200).render('pages/trust-respect', {
        landing: false
    });
};

exports.getContactUs = (req, res) => {
    res.status(200).render('pages/contact-us', {
        landing: false
    });
};

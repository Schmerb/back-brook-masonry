// // // // // // // // // // // // 
//
//	Main Controller
//
// // // // // // // // // // // // 

'use strict';

exports.getIndex = (req, res) => {
    res.status(200).render('index', {
        pages: false
    });
};

exports.getWhoWeAre = (req, res) => {
    res.status(200).render('pages/who-we-are', {
        pages: true
    });
};

exports.getProjects = (req, res) => {
    res.status(200).render('pages/projects', {
        pages: true
    });
};

exports.getTestimonials = (req, res) => {
    res.status(200).render('pages/trust-respect', {
        pages: true
    });
};

exports.getContactUs = (req, res) => {
    res.status(200).render('pages/contact-us', {
        pages: true
    });
};

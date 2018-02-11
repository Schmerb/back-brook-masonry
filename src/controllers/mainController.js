// // // // // // // // // // // // 
//
//	Main Controller
//
// // // // // // // // // // // // 

'use strict';
const { GOOGLE_MAPS_API_KEY } = require('../../config');

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
        GOOGLE_MAPS_API_KEY,
        landing: false,
        path: '/contact-us',
    });
};

// BIM
exports.getBIM = (req, res) => {
    res.status(200).render('pages/BIM', {
        landing:  false,
        path: '/BIM'
    });
}

exports.getBIMExample = (req, res) => {
    const { model } = req.params;
    console.log({model});
    res.status(200).render('pages/BIM/model', {
        model,
        landing: false,
        path: '/BIM/'
    });
}
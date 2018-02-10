// // // // // // // // // // // // 
//
//	Trust & Respect Controller
//
// // // // // // // // // // // // 

'use strict';

const { testimonials } = require('utils/testimonials');

exports.getTestimonials = (req, res) => {
    res.status(200).render('pages/trust-respect', {
        testimonials,
        landing: false,
        path: '/trust-respect'
    });
}
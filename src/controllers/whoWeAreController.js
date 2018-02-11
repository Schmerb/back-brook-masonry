// // // // // // // // // // // // 
//
//	Who We Are Controller
//
// // // // // // // // // // // // 

'use strict';

const request = require('request');
const async   = require('async');

const { employees } = require('utils/employees');
const { resumes }   = require('utils/resumes');

exports.getWhoWeAre = (req, res) => {
    const url = 'http://api.randomuser.me/';
    let myUrls = [];
    for (let i = 0; i < employees.length; i++) {
        myUrls.push(url);
    }
    let images = [];
    let index  = 0;
    async.map(myUrls, (url, callback) => {
        request(url, (error, response, html) => {
            let obj = JSON.parse(html);
            let randomImgUrl = obj.results[0].picture.large;
            employees[index] = {...employees[index], imgUrl: randomImgUrl};
            index++;
            callback(error, html);
        });
    }, (err, results) => {
        res.status(200).render('pages/who-we-are', {
            employees,
            landing: false,
            path: '/who-we-are'
        });
    });
};

exports.getSafetyPage = (req, res) => {
    res.status(200).render('pages/who-we-are', {
        landing: false,
        path: '/who-we-are/safety'
    });
}
exports.getBondingPage = (req, res) => {
    res.status(200).render('pages/who-we-are', {
        landing: false,
        path: '/who-we-are/bonding'
    });
}

exports.getResumePage = (req, res) => {
    let slug = req.params.employee;
    let employee = resumes[slug];
    res.status(200).render('pages/resume', {
        employee,
        landing: false,
        path: `/who-we-are/${slug}`
    });
}

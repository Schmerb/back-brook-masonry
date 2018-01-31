'use strict';

// Module dependencies
const browserSync = require('browser-sync'),
	  nodemon     = require('gulp-nodemon');


// // // // // // //
//
// hot reloads DOM
//
// // // // // // //
function browser_sync() {
	browserSync.init(null, {
		proxy: "http://localhost:8080",
        files: ["public/**/*.js", "public/**/*.css", "src/views/**/*.ejs"],
        browser: "google chrome",
        port: 7000,
	});
};

// // // // // // //
//
// restarts server
//
// // // // // // //
function node_mon(cb) {
	var started = false;
	return nodemon({
		script: 'server.js'
	})
	.on('start', () => {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true; 
		} 
    })
    .on('restart', () => {
        setTimeout(function() {
			browserSync.reload({stream: false});
		}, 2000);
    })
};

module.exports = { browser_sync, node_mon };
'use strict';

const gulp = require('gulp');

const { browser_sync, node_mon 		} = require('./gulp/');
const { watch_es6,    build_es6     } = require('./gulp/gulp-js');
const { watch_scss,   build_scss    } = require('./gulp/gulp-scss');
const { watch_images, minify_images } = require('./gulp/gulp-images');



// ----------------------
// - BrowserSync
// ----------------------
gulp.task('browser-sync', ['nodemon'], browser_sync);
// Restart server
gulp.task('nodemon', node_mon);


// ----------------------
// - BABEL + Browserify
// ----------------------
gulp.task('build_es6', build_es6); // transpiles es6 -> es5
// Detect changes in JS
gulp.task('watch_es6', watch_es6)

// ----------------------
// - SCSS/CSS
// ----------------------
gulp.task('build_scss', build_scss);
// Detect changes in SCSS
gulp.task('watch_scss', watch_scss);

// ----------------------
// - Compress Images
// ----------------------
gulp.task('minify_images', minify_images);
gulp.task('watch_images', watch_images); // detects new images


// - Reload browser on file save
gulp.task('default', ['browser-sync','build_scss', 'watch_scss', 'build_es6', 'watch_es6']);
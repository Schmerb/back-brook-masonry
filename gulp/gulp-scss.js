'use strict';

// Module dependencies
const gulp         = require('gulp'),
	  watch        = require('gulp-watch'),
	  sourcemaps   = require('gulp-sourcemaps'),
	  autoprefixer = require('gulp-autoprefixer'),
	  sass         = require('gulp-sass'),
	  sassGlob     = require('gulp-sass-glob'),
	  uglify       = require('gulp-uglify'),
	  rename       = require('gulp-rename');

const SCSS_ENTRY = 'src/build/scss/screen.scss';
const SCSS_SRC   = 'src/build/scss/**/*.scss';
const SCSS_DEST  = 'public/css';

// // // // // // // // //
//
// Builds CSS from SCSS
//
// // // // // // // // //
function build_scss() {
    return gulp.src(SCSS_ENTRY)
		.pipe(sourcemaps.init())
			.pipe(sassGlob())
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(rename({suffix: '.min'}))
			.pipe(autoprefixer())
		.pipe(sourcemaps.write())
        .pipe(gulp.dest(SCSS_DEST));
}

// // // // // // //
//
// watches SCSS files
//
// // // // // // //
function watch_scss() {
	return watch(SCSS_SRC, () => gulp.start('build_scss'));
}

module.exports = { build_scss, watch_scss };
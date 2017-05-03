'use strict';

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
/*
	Compile SCSS -> CSS,
	and Min
  Comment for my own opush
  saved password?
 */
gulp.task('minify', function () {
  return gulp.src('./css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});

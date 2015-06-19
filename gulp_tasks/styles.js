"use strict";

var gulp         = require('gulp');
var gutil        = require('gulp-util');
var concat       = require('gulp-concat');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss    = require('gulp-minify-css');

var debug        = !!gutil.env.debug;

var compileStyles = function() {
  return function() {
    compileStyle('application');
  };
};

var compileStyle = function(filename) {
  var transform = debug ? gutil.noop : minifyCss;

  return gulp
      .src([ 'src/' + filename + '.sass' ])
      .pipe(sass({
        sourceMap: 'sass',
        sourceComments: 'map',
        precision: 10,
        imagePath: 'images'
      }))
      .pipe(concat( filename + '.css'))
      .pipe(autoprefixer())
      .pipe(transform())
      .pipe(gulp.dest('public/styles'));
};

if (debug) {
  process.env.NODE_ENV = 'development';
}

gulp.task('styles', compileStyles());

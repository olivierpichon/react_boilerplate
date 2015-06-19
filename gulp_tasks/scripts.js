"use strict";

var gulp       = require('gulp');
var gutil      = require('gulp-util');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var browserify = require('browserify');
var uglify     = require('gulp-uglify');

var debug      = !!gutil.env.debug;

if (debug) {
  process.env.NODE_ENV = 'development';
}

gulp.task('scripts', function() {
  var transform = debug ? gutil.noop : uglify;

  var bundler = browserify({
    entries: ['./src/application.js'],
    debug: debug
  });

  return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('application.js'))
      .pipe(buffer())
      .pipe(transform())
      .pipe(gulp.dest('./public/scripts'));
});

"use strict";

var gulp   = require('gulp');
var inject = require("gulp-inject");

gulp.task('index', [ 'styles', 'scripts' ], function() {
  var sources = gulp.src([
    'public/*/application.*'
  ], { read: false });

  return gulp
      .src('src/index.html')
      .pipe(inject(sources, {
        transform: function(filepath, file, i, length) {
          // remove `/public` from the filepath
          filepath = '/' + filepath.split('/').slice(2).join('/');
          return inject.transform(filepath, file, i, length);
        }
      }))
      .pipe(gulp.dest('public'));
});

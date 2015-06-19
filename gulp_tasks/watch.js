"use strict";

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', [ 'scripts' ]);
  gulp.watch('src/index.html', [ 'index' ]);
});

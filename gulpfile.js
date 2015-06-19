"use strict";

var gulp = require('gulp');

var fs          = require('fs');
var onlyScripts = require('./gulp_tasks/utils/script_filter');
var tasks       = fs.readdirSync('./gulp_tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./gulp_tasks/' + task);
});

gulp.task('default', ['build']);
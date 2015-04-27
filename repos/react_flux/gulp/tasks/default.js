var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('default', ['copy', 'browser-sync', 'browserify'], function () {
  gulp.watch(config.styles.src, ['styles', browserSync.reload]);
  gulp.watch(config.templates.src, ['templates', browserSync.reload]);
});
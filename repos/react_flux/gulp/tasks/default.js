var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('default', function () {
  config.browserify.watch = true;
  runSequence(['build', 'browser-sync', 'browserify'], function () {
    gulp.watch(config.styles.src, ['styles', browserSync.reload]);
    gulp.watch(config.templates.src, ['templates', browserSync.reload]);
  });
});
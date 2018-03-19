var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('watch', ['watchify', 'browser-sync'], function() {
  gulp.watch(config.style.src, ['concatCss']);
  gulp.watch(config.template.src, ['template']);
});

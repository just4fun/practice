var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', ['browser-sync', 'browserify'], function () {
  gulp.watch([
    './index.html',
    './css/**'
  ], browserSync.reload);
});
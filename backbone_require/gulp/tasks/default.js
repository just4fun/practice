var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', ['browser-sync'], function () {
  gulp.watch([
    './index.html',
    './js/**',
    './css/**'
  ], browserSync.reload);
});
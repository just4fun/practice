var gulp = require('gulp');
var browserifyTask = require('./browserify');

gulp.task('watchify', function() {
  // open debug model for watching js files without minification
  return browserifyTask(true);
});
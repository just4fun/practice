var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['clean'], function() {
  runSequence('asset', 'watch');
});
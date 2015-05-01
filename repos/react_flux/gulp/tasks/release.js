var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('release', ['clean'], function(cb) {
  runSequence('asset', ['uglifyJs', 'minifyCss'], cb);
});

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('deploy', function() {
  config.browserify.watch = false;
  runSequence(['build', 'browserify'], function () {
    gulp.src(config.deploy.files)
      .pipe(ghPages());
  });
});
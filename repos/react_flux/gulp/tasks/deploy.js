var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var config = require('../config');

gulp.task('deploy', ['release'], function() {
  gulp.src(config.deploy.files)
    .pipe(ghPages());
});
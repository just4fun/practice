var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../config');

gulp.task('uglifyJs', ['browserify'], function() {
  return gulp.src(config.production.jsSrc)
    .pipe(uglify())
    .pipe(gulp.dest(config.production.jsDest));
});
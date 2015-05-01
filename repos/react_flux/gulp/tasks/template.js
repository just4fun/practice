var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('template', function() {
  return gulp.src(config.template.src)
    .pipe(gulp.dest(config.template.dest))
    .pipe(browserSync.reload({stream: true}));
});

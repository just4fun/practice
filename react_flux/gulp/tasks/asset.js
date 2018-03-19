var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('asset', function(cb) {
  runSequence(['font', 'img', 'other', 'template', 'concatCss'], cb);
});

gulp.task('font', function() {
  return gulp.src(config.font.src)
    .pipe(gulp.dest(config.font.dest));
});

gulp.task('img', function() {
  return gulp.src(config.img.src)
    .pipe(gulp.dest(config.img.dest));
});

gulp.task('other', function() {
  return gulp.src(config.other.src)
    .pipe(gulp.dest(config.other.dest));
});
var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('copy', ['clean'], function() {
  runSequence(['fonts', 'styles', 'imgs', 'templates', 'other']);
});

gulp.task('fonts', function() {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});

gulp.task('styles', function() {
  return gulp.src(config.styles.src)
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('imgs', function() {
  return gulp.src(config.imgs.src)
    .pipe(gulp.dest(config.imgs.dest));
});

gulp.task('templates', function() {
  return gulp.src(config.templates.src)
    .pipe(gulp.dest(config.templates.dest));
});

gulp.task('other', function() {
  return gulp.src(config.other.src)
    .pipe(gulp.dest(config.other.dest));
});
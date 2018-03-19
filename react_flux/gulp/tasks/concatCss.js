var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('concatCss', function() {
  return gulp.src(config.style.src)
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.style.dest))
    .pipe(browserSync.reload({stream: true}));
});
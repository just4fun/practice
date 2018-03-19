var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var config = require('../config');

gulp.task('minifyCss', function() {
  return gulp.src(config.production.cssSrc)
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.production.cssDest));
});

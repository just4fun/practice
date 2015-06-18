var gulp = require('gulp');
var karma = require('gulp-karma');
var webserver = require('gulp-webserver');

// test with browser and mocha web reporter
gulp.task('test:serve', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// test with PhantomJS
gulp.task('test:run', function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));
});
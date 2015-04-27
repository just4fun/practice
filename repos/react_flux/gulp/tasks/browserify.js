var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var bundleLogger = require('../utils/bundleLogger');
var config = require('../config');

var path = {
  ENTRY_POINT: './js/app.js',
  OUTPUT: 'bundle.js',
  DEST: './build/js'
};

gulp.task('browserify', function() {
  var b = browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: false
  });

  var bundle = function () {
    bundleLogger.start(path.OUTPUT);

    return b.bundle()
      .pipe(source(path.OUTPUT))
      .pipe(gulp.dest(path.DEST))
      .pipe(browserSync.reload({stream: true}));
  };

  if (config.browserify.watch) {
    b = watchify(b);
    b.on('update', bundle);
    bundleLogger.watch(path.OUTPUT);
  }

  return bundle();
});
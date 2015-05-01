var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var minifyify = require('minifyify');
var source = require('vinyl-source-stream');
var bundleLogger = require('../utils/bundleLogger');
var config = require('../config');

var path = {
  ENTRY_POINT: './js/app.js',
  OUTPUT: 'bundle.js',
  DEST: './build/js'
};

var browserifyTask = function(isDebug) {
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

  if (isDebug) {
    b = watchify(b);
    b.on('update', bundle);
    bundleLogger.watch(path.OUTPUT);
  }
  else {
    b.plugin('minifyify', {map: false});
  }

  return bundle();
};

gulp.task('browserify', function() {
  return browserifyTask();
});

// exporting the task so we can call it directly in our watch task, with the 'isDebug' option
module.exports = browserifyTask;
var gulp = require('gulp');

function startExpress() {

    var express = require('express');
    var app = express();
    app.use(require('connect-livereload')());
    app.use(express.static(__dirname));
    app.listen(4000);
}

var lr;

function startLivereload() {

  lr = require('tiny-lr')();
  lr.listen(35729);
}

function notifyLivereload(event) {

  // `gulp.watch()` events provide an absolute path
  // so we need to make it relative to the server root
  var fileName = require('path').relative(__dirname, event.path);
  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

// watch files for changes and reload

gulp.task('default', function() {
    startExpress();
    startLivereload();
    gulp.watch(['*.html', 'demo/styles/**/*.css', 'src/**/*.js'], {cwd: 'demo'}, notifyLivereload);
});


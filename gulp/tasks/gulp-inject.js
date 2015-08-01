(function() {
  'use strict';

  module.exports = function(gulp, inject, util, wiredep, logger, config) {
    gulp.task('inject', ['constants', 'wiredep', 'stylus', 'templatecache'], function() {
      // 'constants',
      logger(util, 'Wire up the app.css into the html, then call wiredep');
      return gulp
        .src(config.index)
        .pipe(inject(gulp.src(config.css), {
          ignorePath: '/front-end'
        }))
        /*inject it to our views index.html*/
        .pipe(gulp.dest(config.client));
    });
  };
}());

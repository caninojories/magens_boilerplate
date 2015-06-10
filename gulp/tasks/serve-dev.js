(function() {
  'use strict';

  module.exports = function(args, browserSync, gulp, nodemon, util, logger, serve, config) {
    process.env.NODE_ENV = 'development';
    gulp.task('serve-dev', ['optimize'], function() {
      logger(util, 'Running Development Server');
      serve(true, args, gulp, browserSync, nodemon, util, logger, config);
    });
  };
})();

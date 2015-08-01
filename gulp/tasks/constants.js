(function() {
  'use strict';

  module.exports = function(gulp, ngConstant, util, logger) {
    gulp.task('constants', function () {
      logger(util, 'Running constants');
      var myConfig  = require('./util/config.json');
      var envConfig = myConfig[process.env.NODE_ENV];
      return ngConstant({
        name: 'ngConfig',
        constants: envConfig,
        stream: true
      })
      .pipe(gulp.dest('front-end/resources/js/constants'));
    });
  };
}());

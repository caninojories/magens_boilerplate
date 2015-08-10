(function() {
  'use strict';

  var myConfig  = require('./util/config.json');

  module.exports = function(require) {
    require.gulp.task('constants', function () {
      require.logger(require.$.util, 'Running constants');
      var envConfig = myConfig[process.env.NODE_ENV];
      return require.$.ngConstant({
        name: 'ngConfig',
        constants: envConfig,
        stream: true
      })
      .pipe(require.gulp.dest('front-end/resources/js/constants'));
    });
  };
}());

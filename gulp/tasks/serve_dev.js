(function() {
  'use strict';

  module.exports = function(require) {
    process.env.NODE_ENV = 'development';
    require.gulp.task('serve-dev', ['inject'], function() {
      require.logger(require.$.util, 'Running Development Server');
      require.serve(true, null, require);
    });
  };
})();

(function() {
  'use strict';

  module.exports = function(require) {
   /**
    * Used for the constants in the logger
    * for Angularjs $log
    **/
    process.env.NODE_ENV = 'production';
    require.gulp.task('serve-build', ['optimize', 'images', 'fonts'], function() {
      require.logger(require.$.util, 'Running Production Server');
      require.serve(false, null, require);
    });
  };
}());

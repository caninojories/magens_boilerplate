(function() {
  'use strict';

  module.exports = function(require) {
    require.gulp.task('browserSyncReload', ['optimize'], require.browserSync.reload);
  };
}());

(function() {
  'use strict';

  module.exports = function(require) {
    require.gulp.task('images', ['clean-images'], function() {
      require.logger(require.$.util, 'Compressing and copying images');

      return require.gulp
          .src(require.config.images)
          .pipe(require.$.imagemin({optimizationLevel: 4}))
          .pipe(require.gulp.dest(require.config.build + 'images'));
    });

    require.gulp.task('clean-images', function(done) {
      require.del(require.config.build + 'images/**/*.*', done);
    });
  };
}());

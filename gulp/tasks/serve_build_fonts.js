(function() {
  'use strict';

  module.exports = function(require) {
    require.gulp.task('fonts', ['clean-fonts'], function() {
      require.logger(require.$.util, 'Copying Fonts');

      return require.gulp
        .src(require.config.fonts)
        .pipe(require.gulp.dest(require.config.build + 'fonts'));
    });

    require.gulp.task('clean-fonts', function(done) {
      require.logger(require.$.util, 'Cleaning Fonts');
      require.del(require.config.build + 'fonts/**/*.*', done);
    });
  };
}());

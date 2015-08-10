(function() {
  'use strict';

  module.exports = function(require) {
    require.gulp.task('clean-code', function(done) {
      var files = [].concat(
        require.config.temp + '**/*.js',
        require.config.build + 'js/**/*.js',
        require.config.build + '**/*.html'
      );

      clean(files, done);
    });

    /**
     * Delete all files in a given path
     * @param  {Array}   path - array of paths to delete
     * @param  {Function} done - callback when complete
     */
    function clean(path, done) {
        require.logger(require.$.util, 'Cleaning: ' + require.$.util.colors.blue(path));
        require.del(path, done);
    }
  };
}());

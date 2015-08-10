(function() {
  'use strict';

  module.exports = function(require) {
    require.gulp.task('jscshint', function() {
      require.logger(require.$.util, 'Analyzing source with JSHINT and JSCS');

      return require.gulp
        .src(require.config.alljs)
        .pipe(require.$.if(require.args.verbose, require.$.print()))
        .pipe(require.$.jshint())
        .pipe(require.$.jshint.reporter('jshint-stylish', {verbose:true}))
        .pipe(require.$.jshint.reporter('fail'))
        .on('error', require.handleErrors)
        .pipe(require.$.jscs())
        .on('error', require.handleErrors);
    });
  };
}());

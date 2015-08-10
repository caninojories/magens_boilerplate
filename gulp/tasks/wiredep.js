(function() {
  'use strict';

  module.exports = function(require) {
    var options = require.config.getWireDepDefaultOptions();
    /* Only include stubs if flag is enabled */
    var js = require.args.stubs ? [].concat(require.config.js, require.config.stubsjs) : require.config.js;
    require.gulp.task('wiredep', function() {
      require.logger(require.$.util, 'Wire up our js css and app.js into our html');
      return require.gulp
        .src(require.config.index)
        .pipe(require.wiredep(options))
        .pipe(require.$.inject(require.gulp.src(js, {read: false}), {
          ignorePath: 'front-end/resources'
        }))
        /*inject it to our client view*/
        .pipe(require.gulp.dest(require.config.client));
    });
  };
}());

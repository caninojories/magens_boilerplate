(function() {
  'use strict';

  module.exports = function(
    gulp,
    args,
    inject,
    util,
    wiredep,
    logger,
    config
  ) {
    var options = config.getWireDepDefaultOptions();
    /* Only include stubs if flag is enabled */
    var js = args.stubs ? [].concat(config.js, config.stubsjs) : config.js;
    gulp.task('wiredep', function() {
      logger(util, 'Wire up our js css and app.js into our html');
      return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(inject(gulp.src(js, {read: false}), {
          ignorePath: 'front-end/resources'
        }))
        /*inject it to our client view*/
        .pipe(gulp.dest(config.client));
    });
  };
}());

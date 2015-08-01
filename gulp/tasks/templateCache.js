(function() {
  'use strict';

  module.exports = function(
    gulp,
    args,
    bytediff,
    ifs,
    minifyHtml,
    templateCache,
    util,
    logger,
    config) {
      gulp.task('templatecache', function() {
        logger(util, 'Creating AngularJs TemplateCache');
        return gulp
          .src(config.htmlTemplates)
          .pipe(ifs(args.verbose, bytediff.start()))
          .pipe(minifyHtml({empty: true}))
          .pipe(templateCache(
            config.templateCache.file,
            config.templateCache.options
          ))
          .pipe(gulp.dest(config.temp));
      });
  };
}());

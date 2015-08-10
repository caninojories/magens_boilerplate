(function() {
  'use strict';

  module.exports = function(require) {
      require.gulp.task('templatecache', ['clean-code'],  function() {
        require.logger(require.$.util, 'Creating AngularJs TemplateCache');
        return require.gulp
          .src(require.config.htmlTemplates)
          .pipe(require.$.if(require.args.verbose, require.$.bytediff.start()))
          .pipe(require.$.minifyHtml({empty: true}))
          .pipe(require.$.angularTemplatecache(
            require.config.template_cache.file,
            require.config.template_cache.options
          ))
          .pipe(require.gulp.dest(require.config.temp));
      });
  };
}());

(function() {
  'use strict';

  module.exports = function(require) {
    var assets          = require.$.useref.assets({searchPath:['front-end/resources', 'front-end']});
    var template_cache  = require.config.temp + require.config.template_cache.file;
    /*Filters are named for the gulp-useref path*/
    var cssFilter     = require.$.filter('**/*.css');
    var vendorFilter  = require.$.filter('**/vendor.js');
    var appFilter     = require.$.filter('**/app.js');
    var templates     = require.config.temp + require.config.template_cache.file;
    // 'fonts', 'images', 'copy'
    require.gulp.task('optimize', ['inject'], function() {
      require.logger(require.$.util, 'Optimizing the js css and html');

      return require.gulp
        .src(require.config.index)
        .pipe(require.$.inject(require.gulp.src(templates, {read: false}), {
          ignorePath: '/front-end',
          starttag: '<!-- inject:templates:js -->'
        }))
        .pipe(assets)
        /*css filter*/
        .pipe(cssFilter)
        .pipe(require.$.csso())
        .pipe(cssFilter.restore())
        /*vendor filter*/
        .pipe(vendorFilter)
        .pipe(require.$.uglify())
        .pipe(vendorFilter.restore())
        /*app filter*/
        .pipe(appFilter)
        .pipe(require.$.ngAnnotate({add:true}))
        .pipe(require.$.uglify())
        .pipe(appFilter.restore())
        .pipe(assets.restore())
        .pipe(require.$.useref())
        .pipe(require.gulp.dest(require.config.build));
    });
  };
}());

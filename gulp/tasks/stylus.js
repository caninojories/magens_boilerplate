(function() {
  'use strict';

  var nib     = require('nib');

  module.exports = function (require) {
      require.gulp.task('stylus', function() {
        require.logger(require.$.util, 'Compiling Stylus ---> CSS');
        return require.gulp.src(require.config.stylus)
          .pipe(require.$.stylus({use: [nib()]}) )
          .on('error', require.handleErrors)
          .pipe(require.$.autoprefixer({browsers:['last 2 versions', '> 5%']}))
          .on('error', require.handleErrors )
          .pipe(require.gulp.dest(require.config.temp + 'stylus/'))
          .pipe(require.$.csslint({
          'font-sizes': false,
          'gradients': false,
          'important': false,
          'compatible-vendor-prefixes': false,
          'unqualified-attributes': false,
          'box-model': false,
          'display-property-grouping': false,
          'adjoining-classes': false
          }))
          .pipe(require.$.csslint.reporter());
      });
  };
}());

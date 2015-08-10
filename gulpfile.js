(function() {
  'use strict';

  var gulp          = require('gulp'),
      $             = require('gulp-load-plugins')({lazy: true}),
      args          = require('yargs').argv,
      browserSync   = require('browser-sync'),
      del           = require('del'),
      karma         = require('karma').server,
      wiredep       = require('wiredep').stream,
      config        = require('./gulp.config')(),
      remove        = require('./gulp/tasks/util/remove'),
      logger        = require('./gulp/tasks/util/logger'),
      serve         = require('./gulp/tasks/util/serve'),
      handleErrors  = require('./gulp/tasks/util/handleErrors');

      /*jsDoc         = require('gulp-jsdoc' );*/

  var module = {
    gulp        : gulp,
    $           : $,
    args        : args,
    browserSync : browserSync,
    config      : config,
    del         : del,
    logger      : logger,
    karma       : karma,
    remove      : remove,
    serve       : serve,
    handleErrors: handleErrors,
    wiredep     : wiredep
  };
  /*IIFE*/
  (function() {

  }());

  // require('./gulp/tasks/gulp-stylus.js')(del, gulp, stylus, prefixer, csslint, util, remove,
  //   handleErrors, logger, config);
  require('./gulp/tasks/jscshint.js')(module);
  //   util, handleErrors, logger, config);
  // require('./gulp/tasks/gulp-watch-stylus.js')(gulp, config);
  // require('./gulp/tasks/gulp-karma.js')(gulp, karma);
  require('./gulp/tasks/serve_dev.js')(module);

  require('./gulp/tasks/serve_build')(module);
  /*required by serve-build*/
  require('./gulp/tasks/optimize')(module);
  require('./gulp/tasks/serve_build_reload')(module);
  require('./gulp/tasks/serve_build_fonts')(module);
  require('./gulp/tasks/serve_build_images')(module);

  // require('./gulp/tasks/gulp-taskListing')(gulp, taskListing);
  // require('./gulp/tasks/default')(gulp);
  // require('./gulp/tasks/fonts')(gulp, util, logger, config);
  // require('./gulp/tasks/images')(gulp, imagemin, util, logger, config);
  // require('./gulp/tasks/clean')(del, gulp, util, remove, logger, config);
  // require('./gulp/tasks/copy')(gulp, util, logger, config);
  // require('./gulp/tasks/test')(gulp, args, util, logger, config);

  require('./gulp/tasks/inject.js')(module);
  /*module needed for gulp-inject*/
  require('./gulp/tasks/constants')(module);
  require('./gulp/tasks/wiredep')(module);
  require('./gulp/tasks/stylus.js')(module);
  require('./gulp/tasks/template_cache')(module);
  /*needs to clean our temp and build for js and html*/
  require('./gulp/tasks/clean-code')(module);
}());

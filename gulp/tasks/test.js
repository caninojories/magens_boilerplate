(function() {
  'use strict';

  /**
   * Run specs once and exit
   * To start servers and run midway specs as well:
   *    gulp test --startServers
   * @return {Stream}
   */
  module.exports = function(gulp, args, util, logger, config) {
    gulp.task('test', ['jscshint', 'templatecache'], function(done) {
      startTest(true, done, args, util, logger, config);
    });
  };

  function startTest(singleRun, done, args, util, logger, config) {
    var child;
    var excludeFiles = [];
    var fork = require('child_process').fork;
    var karma = require('karma').server;
    var serverSpecs = config.serverIntegrationSpecs;

    if (args.startServers) {
        logger(util, 'Starting servers');
        var savedEnv = process.env;
        savedEnv.NODE_ENV = 'development';
        savedEnv.PORT = 8888;
        child = fork(config.nodeServer);
    } else {
        if (serverSpecs && serverSpecs.length) {
            excludeFiles = serverSpecs;
        }
    }

    karma.start({
        configFile: config.root + 'karma.conf.js',
        exclude: excludeFiles,
        singleRun: !!singleRun
    }, karmaCompleted);

    function karmaCompleted(karmaResult) {
        logger(util, 'Karma completed');
        if (child) {
            logger(util, 'shutting down the child process');
            child.kill();
        }
        if (karmaResult === 1) {
            done('karma: tests failed with code ' + karmaResult);
        } else {
            done();
        }
    }
  }
}());

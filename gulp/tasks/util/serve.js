(function() {
  'use strict';

  module.exports = function(isDev, specRunner, require) {
    var debugMode = '--debug';
    var nodeOptions = getNodeOptions(isDev);
    nodeOptions.nodeArgs = [debugMode + '=5858'];


    var port = process.env.PORT || require.config.defaultPort;

    if(require.args.nosync || require.browserSync.active) {return;}

    if (require.args.verbose) {
      console.log(nodeOptions);
    }

    return require.$.nodemon(nodeOptions)
      .on('restart', ['jscshint'], function(ev) {
        require.logger(require.$.util, '*** Nodemon Restarted');
        require.logger(require.$.util, '*** Files Changed on Restart:\n' + ev);
          setTimeout(function() {
            require.browserSync.notify('reloading now ...');
            require.browserSync.reload({stream: false});
          }, 3000);
      })
      .on('start', function () {
        require.logger(require.$.util, '*** nodemon started');
        setTimeout(function() {
          startBrowserSync(isDev, specRunner, require);
        }, 3000);
      })
      .on('crash', function () {
        require.logger(require.$.util, '*** nodemon crashed: script crashed for some reason');
      })
      .on('exit', function () {
        require.logger(require.$.util, '*** nodemon exited cleanly');
      });

    function getNodeOptions(isDev) {
      return {
        script: require.config.node_server,
        delayTime: 1,
        env: {
          'PORT': process.env.PORT || require.config.defaultPort,
          'NODE_ENV': isDev ? 'development' : 'production'
        },
        watch: [require.config.server]
      };
    }
  };


  function startBrowserSync(isDev, specRunner, require) {
    if(require.args.nosync || require.browserSync.active) {return;}
    require.logger(require.$.util, 'Starting browser-sync on port ' + require.config.defaultPort);

    // If build: watches the files, builds, and restarts browser-sync.
    // If dev: watches less, compiles it to css, browser-sync handles reload
    if (isDev) {
        require.gulp.watch([require.config.stylus], ['stylus'])
          .on('change', changeEvent);
    } else {
        require.gulp.watch([require.config.stylus, require.config.js, require.config.htmlTemplates], ['browserSyncReload'])
          .on('change', changeEvent);
    }

    var options = {
      proxy: 'localhost:' + require.config.defaultPort,
      port: 3000,
      files: isDev ?
        [
          require.config.client + '**/*.*',
          require.config.css
        ]: [],
      ghostMode: {
        click: true,
        location: false,
        forms: true,
        scroll: true,
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: 'info',
      logPrefix: 'magens',
      notify: true,
      reloadDelay: 0
    };

    require.browserSync(options);

    function changeEvent(event) {
      var srcPattern = new RegExp('/.*(?=/)/');
      require.logger(require.$.util, 'File ' + event.path.replace(srcPattern, '')+ ' ' + event.type  );
    }
  }
}());

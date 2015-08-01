(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('Main', Main);

    Main.$inject = ['logger'];

    /*@ngInject*/
    function Main(logger) {
      var vm = this;

      (function() {
        logger.info('Activated Main view');
      }());

    }
}());

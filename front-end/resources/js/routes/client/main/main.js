(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('Main', Main);

    Main.$inject = ['logger', 'DataQuery', 'userAPI'];

    /*@ngInject*/
    function Main(logger, DataQuery, userAPI) {
      var vm = this;

      DataQuery
        .get(
          'general',
          userAPI,
          {}
        ).then(function(data) {
          console.log(data);
        });

      (function() {
        logger.info('Activated Main view');
      }());

    }
}());

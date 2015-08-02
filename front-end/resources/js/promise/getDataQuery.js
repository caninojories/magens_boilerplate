(function() {
  'use strict';

  angular
    .module('app.promise')
    .factory('DataQuery', DataQuery);

    DataQuery.$inject = ['$q', '$timeout', 'withQuery'];
    /*@ngInject*/
    function DataQuery($q, $timeout, withQuery) {
      var service = {
        get : get
      };

      return service;

      function get(api, restApi, queryParams) {
        return $q(function(resolve, reject) {
          $timeout(function() {
            withQuery
              .HTTPGET(api, restApi, queryParams)
              .then(function(response) {
                resolve(response);
              });
          }, 0);
        });
      }
    }
}());

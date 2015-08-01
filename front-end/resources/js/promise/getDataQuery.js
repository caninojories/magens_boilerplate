(function() {
  'use strict';

  angular
    .module('app.promise')
    .factory('GetDataQuery', GetDataQuery);

    GetDataQuery.$inject = ['$q', '$timeout', 'withQuery'];
    /*@ngInject*/
    function GetDataQuery($q, $timeout, withQuery) {
      return function(api, restApi, queryParams) {
        return $q(function(resolve, reject) {
          $timeout(function() {
            withQuery
              .HTTPGET(api, restApi, queryParams)
              .then(function(response) {
                resolve(response);
              });
          }, 0);
        });
      };
    }
}());

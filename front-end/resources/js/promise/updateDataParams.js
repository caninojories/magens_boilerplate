(function() {
  'use strict';

  angular
    .module('app.promise')
    .factory('UpdateDataParams', UpdateDataParams);

    UpdateDataParams.$inject = ['$q', '$timeout', 'withParams'];
    /*@ngInject*/
    function UpdateDataParams($q, $timeout, withParams) {
      return function(api, restApi, params, queryParams) {
        return $q(function(resolve, reject) {
          $timeout(function() {
            withParams
              .HTTPUT(api, restApi, params, queryParams)
              .then(function(response) {
                resolve(response);
              });
          }, 0);
        });
      };
    }
}());

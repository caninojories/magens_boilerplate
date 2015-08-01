(function() {
  'use strict';

  angular
    .module('app.promise')
    .factory('GetDataParams', GetDataParams);

    GetDataParams.$inject = ['$q', '$timeout', 'withParams', 'userAPI'];

    function GetDataParams($q, $timeout, withParams, userAPI) {
      return function(api, params, queryParams) {
        return $q(function(resolve, reject) {
          $timeout(function() {
            withParams
              .HTTPGET(api, userAPI, params, queryParams)
              .then(function(response) {
                resolve(response);
              });
          }, 0);
        });
      };
    }
}());

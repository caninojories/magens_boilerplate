(function() {
  'use strict';

  angular
    .module('app.promise')
    .factory('DeleteDataParams', DeleteDataParams);

    DeleteDataParams.$inject = ['$q', '$timeout', 'withParams'];
    /*@ngInject*/
    function DeleteDataParams($q, $timeout, withParams) {
      return function(api, restApi, params, queryParams) {
        return $q(function(resolve, reject) {
          $timeout(function() {
            withParams
              .HTTPDELETE(api, restApi, params, queryParams)
              .then(function(response) {
                resolve(response);
              });
          }, 0);
        });
      };
    }
}());

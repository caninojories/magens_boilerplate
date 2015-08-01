(function() {
  'use strict';

  angular
    .module('app.promise')
    .factory('PostDataParams', PostDataParams);

    PostDataParams.$inject = ['$q', '$timeout', 'withParams'];
    /*@ngInject*/
    function PostDataParams($q, $timeout, withParams) {
      return function(api, restApi, params, queryParams) {
        return $q(function(resolve, reject) {
          $timeout(function() {
            withParams
              .HTTPOST(api, restApi, params, queryParams)
              .then(function(response) {
                resolve(response);
              });
          }, 0);
        });
      };
    }
}());

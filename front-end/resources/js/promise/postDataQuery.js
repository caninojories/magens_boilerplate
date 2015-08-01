(function() {
  'use strict';

  angular
    .module('app.promise')
    .factory('PostDataQuery', PostDataQuery);

    PostDataQuery.$inject = ['$q', '$timeout', 'withQuery'];
    /*@ngInject*/
    function PostDataQuery($q, $timeout, withQuery) {
      return function(api, restApi, params) {
        return $q(function(resolve, reject) {
          $timeout(function() {
            withQuery
              .HTTPOST(api, restApi, params)
              .then(function(response) {
                resolve(response);
              });
          }, 0);
        });
      };
    }
}());

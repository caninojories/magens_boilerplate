(function() {
  'use strict';

  module.exports = function(app, io) {
    var routes_api_client = io.rootPath + 'back-end/api_use/client/';

    var use_api_client = {
        login   : require(routes_api_client + 'login'),
        signup  : require(routes_api_client + 'signup'),
        user    : require(routes_api_client + 'user'),
        videos  : require(routes_api_client + 'video')
    };
    return useApi([{
      name: 'user',
      url: [
        /*client Routes*/
        use_api_client.login,
        use_api_client.signup,
        use_api_client.user,
        use_api_client.videos

        /*admin Routes*/
      ]
    }]);

    function useApi(param) {
      for (var key in param) {
       if (param.hasOwnProperty(key)) {
          var obj = param[key];
          obj.url.forEach(function(url) {
            app.use('/api_v1/' + obj.name, url);
          });
        }
      }
    }
  };
}());

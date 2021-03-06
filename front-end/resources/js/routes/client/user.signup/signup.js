(function() {
  'use strict';

  angular
    .module('app.signup')
    .controller('Signup', Signup);

    Signup.$inject = [
      /*angular services/factory*/
      '$q', '$rootScope', '$timeout',
      /*third party services/factory*/
      '$auth',
      /*custom services/factory*/
      'exception', 'DataQuery', 'userAPI',
      /*custom directives*/
      'strapModal', 'strapAlert'
    ];

    function Signup($q, $rootScope, $timeout,
      $auth,
      exception, DataQuery, userAPI,
      strapModal, strapAlert) {
      var vm = this;
      /*Initialization*/
      vm.user                     = {};
      vm.isAuthenticated          = $auth.isAuthenticated;
      /*Functions*/
      vm.check_email_in_blurred   = check_email_in_blurred;
      vm.user.signup              = user_signup;

      function user_signup() {
        strapModal.show('am-fade-and-scale', 'center', 'commons/register.html');
      }

      function authenticate(provider) {
        $auth.authenticate(provider)
        .then(function(response) {
          $rootScope.username = response.data.user.displayName || response.data.user.username;
          vm.isAuthenticated  = $auth.isAuthenticated;
        }, function(err) {
          exception.catcher('Error in signing using: ' + provider)(err);
        });
      }

      function check_email_in_blurred(sign_form) {
        return new DataQuery
          .get(
            'email/check',
            userAPI,
            {}
          ).then(function(response) {
            vm.user = response[0];
            if (vm.user !== undefined) {
              sign_form.email.$setValidity('taken', false);
            } else {
              sign_form.email.$setValidity('taken', true);
            }
          });
      }

      function signup(signup_form_is_valid) {
        if (signup_form_is_valid !== true) {return;}

        $auth.signup({
          email: vm.email,
          password: vm.password,
          username: vm.username
        }).then(function(response) {
          $rootScope.username = vm.username;
          strapModal.hide();
          strapAlert.show('Success!', 'Your account has been successfully created');
          $timeout(function() {
            strapAlert.hide();
          }, 2000);
        }).catch(function(err) {
          exception.catcher('Error in signing using local sign-up')(err);
        });
      }
    }
}());

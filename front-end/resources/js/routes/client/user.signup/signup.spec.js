(function() {
  'use strict';

  /* jshint -W117, -W030 */
  describe('Signup Controller', function() {
    var I_controller,
        A_controller,
        sign_form = {},
        templateHtml,
        form,
        formElem,
        email = [];
    beforeEach(function() {
      bard.appModule('app.signup');
      bard.inject('$compile', '$controller', '$log', '$httpBackend', '$q', '$rootScope', '$templateCache',
      'exception', 'DataQuery', 'userAPI');
      // sinon.stub(DataQuery, 'get').returns($q.when(email));
      // var GetDQ = {
      //   check_email_in_blurred: function() {
      //     return $q.when(function() {
      //       return [{
      //         message: 'Email is taken',
      //         data   : {
      //           email: 'canino_jories@hotmail.com'
      //         }
      //       }];
      //     });
      //   }
      // };
    });

    beforeEach(function () {
      I_controller  = $controller('Signup');
      // console.log(I_controller.signupForm);
    });

    beforeEach(function () {
      sinon.stub(DataQuery, 'get').returns($q.when(email));
      A_controller  = $controller('Signup');
      templateHtml = $templateCache.get('commons/register.html');
      formElem = angular.element('<div>' + templateHtml + '</div>');
      form = formElem.find('form').eq(0);
      $compile(form)($rootScope);

      // $rootScope.vm.user.response = [];
      I_controller.response = [{
        'jories': 'canino'
      }];
      $rootScope.$apply();
      $rootScope.vm.signup.form.response = [];
      A_controller.check_email_in_blurred($rootScope.vm.signup.form);
      $rootScope.$apply();
    });

    beforeEach(function () {
      templateHtml = $templateCache.get('commons/register.html');
      formElem = angular.element('<div>' + templateHtml + '</div>');
      form = formElem.find('form').eq(0);
      $compile(form)($rootScope);

      // $rootScope.vm.user.response = [];
      I_controller.response = [{
        'jories': 'canino'
      }];
      $rootScope.$apply();
      A_controller.check_email_in_blurred($rootScope.vm.signup.form);
      $rootScope.$apply();
    });

    it('controller is defined and exist', function() {
      expect(I_controller).to.exist;
    });

    it('should have a user instantiation', function() {
      expect(I_controller.user).to.exist;
    });

    it('should have a check_email_in_blurred instantiation', function() {
      expect(I_controller.check_email_in_blurred).to.exist;
    });

    // it('should have a called the check_email_in_blurred function', function() {
    //   var sign_form = {};
    //   controller.check_email_in_blurred(sign_form);
    // });

    // it('should have a return a promise', function(done) {
    //   var output = ['something'];  // Expected Array Output
    //         // GetDataQuery options here
    //   new GetDataQuery('email/check',
    //                     userAPI,
    //                     {}).then(function (response) {
    //                       console.log(response);
    //     expect(response).toBe(output);
    //     done();
    //   });
    // });
  });
}());

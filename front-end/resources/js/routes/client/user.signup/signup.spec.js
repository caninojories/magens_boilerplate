(function() {
  'use strict';

  /* jshint -W117, -W030 */
  describe('Signup Controller', function() {
    var controller,
        sign_form = {};
    beforeEach(function() {
      bard.appModule('app.signup');
      bard.inject('$controller', '$log', '$q', '$rootScope', 'exception', 'GetDataQuery', 'userAPI');

      var GetDQ = {
        check_email_in_blurred: function() {
          return;
        }
      };
      controller  = $controller('Signup');
    });

    it('controller is defined and exist', function() {
      expect(controller).to.exist;
    });

    it('should have a user instantiation', function() {
      expect(controller.user).to.exist;
    });

    it('should have a check_email_in_blurred instantiation', function() {
      expect(controller.check_email_in_blurred).to.exist;
    });

    it('should have a check_email_in_blurred instantiation', function() {
      return controller.check_email_in_blurred(sign_form).should.eventually.equal('foo');
    });
  });
}());

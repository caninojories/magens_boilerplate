(function() {
  'use strict';

  var app           = io.express(),
      email_get     = require('../impl/register/http_get'),
      register_post = require('../impl/register/http_post');

  app.route('/user/register')
    .post(io.passport.authenticate('local-register'), register_post.user);

  app.route('/check/email')
    .get(email_get.info);

  module.exports = app;
}());

(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate',
        'ui.router',
        'restangular',
        //'ngSanitize',
        /**
         * Commons module
         **/
        // 'app.register',
        // 'app.login',
        'app.promise',
        'app.promise.request',
        'app.services',
        'app.widgets',
        'ngConfig',
        /*
         * Our reusable cross app code modules
         */
        'blocks.exception',
        'blocks.logger',
        'blocks.router',
        /*
         * 3rd Party modules
         */
        'mgcrea.ngStrap',
        'angular-loading-bar',
        'satellizer'
    ]);
})();

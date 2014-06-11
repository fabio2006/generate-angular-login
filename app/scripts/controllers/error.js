'use strict';

angular.module('organizationApp.error', ['organizationApp.security'])
  .config(function($stateProvider) {
    $stateProvider
      .state('app.error', {
        url: '/error/:error',
        templateUrl: 'templates/error.tpl.html',
        accessLevel: accessLevels.public
      });
  });
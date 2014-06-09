'use strict';

angular.module('organizationApp.pages', ['organizationApp.grandfather'])
  .config(function($stateProvider) {
    $stateProvider
      .state('app.admin', {
        url: '/admin',
        templateUrl: 'templates/admin.tpl.html',
        accessLevel: accessLevels.admin
      })
      .state('app.user', {
        url: '/user',
        templateUrl: 'templates/user.tpl.html',
        accessLevel: accessLevels.user
      });
  });
'use strict';

angular.module('organizationApp.security', ['ui.router', 'templates-app'])
  .config(function($stateProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {
          'login': function(authenticationService, $q, $http) {
            var roleDefined = $q.defer();

            /**
             * In case there is a pendingStateChange means the user requested a $state,
             * but we don't know yet user's userRole.
             *
             * Calling resolvePendingState makes the authenticationService retrieve his userRole remotely.
             */
            if (authenticationService.pendingStateChange) {
              return authenticationService.resolvePendingState($http.get('/user'));
            } else {
              roleDefined.resolve();
            }
            return roleDefined.promise;
          }
        }
      });
  });
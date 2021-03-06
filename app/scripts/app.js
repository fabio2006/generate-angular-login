'use strict';

angular.module('organizationApp', [
  // login service
  'authenticationService',
  'organizationApp.mock',
  'organizationApp.directives',
  // different app sections
  'organizationApp.home',
  'organizationApp.pages',
  'organizationApp.register',
  'organizationApp.error',
  // components
  'ngAnimate'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope) {
    /**
     * $rootScope.doingResolve is a flag useful to display a spinner on changing states.
     * Some states may require remote data so it will take awhile to load.
     */
    var resolveDone = function() {
      $rootScope.doingResolve = false;
    };
    $rootScope.doingResolve = false;

    $rootScope.$on('$stateChangeStart', function() {
      $rootScope.doingResolve = true;
    });
    $rootScope.$on('$stateChangeSuccess', resolveDone);
    $rootScope.$on('$stateChangeError', resolveDone);
    $rootScope.$on('$statePermissionError', resolveDone);
  })
  .controller('BodyController', function($scope, $state, $stateParams, authenticationService, $http, $timeout) {
    // Expose $state and $stateParams to the <body> tag
    $scope.$state = $state;
    $scope.$stateParams = $stateParams;

    // authenticationService exposed and a new Object containing login user/pwd
    $scope.ls = authenticationService;
    $scope.login = {
      working: false,
      wrong: false
    };
    $scope.loginMe = function() {
      // setup promise, and 'working' flag
      var loginPromise = $http.post('/login', $scope.login);
      $scope.login.working = true;
      $scope.login.wrong = false;

      authenticationService.loginUser(loginPromise);
      loginPromise.error(function() {
        $scope.login.wrong = true;
        $timeout(function() {
          $scope.login.wrong = false;
        }, 8000);
      });
      loginPromise.
      finally(function() {
        $scope.login.working = false;
      });
    };
    $scope.logoutMe = function() {
      authenticationService.logoutUser($http.get('/logout'));
    };
  });
'use strict';

angular.module('organizationApp.home', ['organizationApp.security'])
  .config(function($stateProvider) {
    $stateProvider
      .state('app.home', {
        url: '/',
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeController'
      });
  })
  .controller('HomeController', function($scope) {
    $scope.users = angular.fromJson(localStorage.getItem('userStorage'));
  });
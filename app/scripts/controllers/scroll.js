'use strict';

angular.module('organizationApp')
  .controller('ScrollCtrl', function($scope) {
    $scope.a = 12312;
    $scope.items = [];

    var counter = 0;
    $scope.loadMore = function() {
      for (var i = 0; i < 5; i++) {
        $scope.items.push({
          id: counter
        });
        counter += 10;
      }
    };

    $scope.$parent.selectedTab = 'about';

    $scope.loadMore();
  });
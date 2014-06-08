'use strict';

angular.module('organizationApp')
  .service('Api', function Api() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var a = 1;
    return a;
  });
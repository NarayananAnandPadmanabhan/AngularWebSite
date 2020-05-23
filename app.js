(function () {
    'use strict';

    angular.module('MyFirstApp', [])

    .controller('MyFirstController', function ($scope) {
      $scope.name = "Narayanan";
      $scope.sayHello = function () {
          return "Hello Narayanan!";
      };
    });

})();

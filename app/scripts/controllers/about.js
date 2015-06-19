'use strict';

/**
 * @ngdoc function
 * @name iorad.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iorad
 */
angular.module('iorad')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

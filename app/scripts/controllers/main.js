'use strict';

/**
 * @ngdoc function
 * @name iorad.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iorad
 */
angular.module('iorad')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

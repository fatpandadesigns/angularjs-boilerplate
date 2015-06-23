'use strict';

/**
 * @ngdoc overview
 * @name ioad
 * @description
 * # iorad
 *
 * Main module of the application.
 */
angular
  .module('iorad', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
//  .config(function ($locationProvider) {
//    $locationProvider.html5Mode(true);
//  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

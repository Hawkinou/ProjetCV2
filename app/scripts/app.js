'use strict';

/**
 * @ngdoc overview
 * @name projetCv2App
 * @description
 * # projetCv2App
 *
 * Main module of the application.
 */
angular
  .module('projetCv2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/userList', {
        templateUrl: 'views/userList.html',
        controller: 'UserCtrl'
      })
	  .when('/about/:userId', {
        templateUrl: 'views/userInfo.html',
        controller: 'UserCtrl'
      })
	  .when('/update', {
        templateUrl: 'views/userList.html',
        controller: 'UserCtrl'
      })
	  .when('/create', {
        templateUrl: 'views/userList.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

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

	    .when('/update', {
        templateUrl: 'views/updateList.html',
        controller: 'UserCtrl'
      })
	    .when('/create', {
        templateUrl: 'views/createUser.html',
        controller: 'CreateCtrl'
      })
      .when('/update/:userId', {
        templateUrl: 'views/updateUser.html',
        controller: 'UpdateCtrl'
      })
      .when('/userList/:userId', {
        templateUrl: 'views/userInfo.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

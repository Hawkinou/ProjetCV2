'use strict';

/**
 * @ngdoc function
 * @name projetCv2App.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the projetCv2App
 */

angular.module('projetCv2App')
  .controller('UserCtrl', ['$scope', '$http', '$routeParams', 'commandCV', function ($scope, $http, $routeParams, commandCV) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   commandCV.get(function(data) {
          $scope.users = data.data;
        },
		function(data) {
			$scope.users = "Unable to load";
		});

    if($routeParams.userId) {
      commandCV.get($routeParams.userId, function(data) {
          $scope.currentUser = data.data;
        }, function(data) {
			$scope.currentUser = data.data;
		})};
	
  }]);
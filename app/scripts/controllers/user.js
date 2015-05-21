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

    commandCV.get(function (data) {
        $scope.users = data.data;
      },
      function (data) {
        $scope.users = "Unable to load";
      });

    commandCV.getUser($routeParams.userId, function (data) {
        $scope.currentUser = data.data;
      },
      function (data) {
        $scope.currentUser = "Unable to load";
      });
    commandCV.getInfo("Formations", $routeParams.userId, function (data) {
        $scope.userFormation = data.data;
      },
      function (data) {
        $scope.userFormation = "Unable to load";
      });
    commandCV.getInfo("Skills", $routeParams.userId, function (data) {
        $scope.userSkill = data.data;
      },
      function (data) {
        $scope.userSkill = "Unable to load";
      });
    commandCV.getInfo("Experiences", $routeParams.userId, function (data) {
        $scope.userExp = data.data;
      },
      function (data) {
        $scope.userExp = "Unable to load";
      });
    commandCV.getInfo("Projects", $routeParams.userId, function (data) {
        $scope.userProject = data.data;
      },
      function (data) {
        $scope.userProject = "Unable to load";
      });
    $scope.getCompet = function(skill) {
      commandCV.getInfo2(skill.id, function (data) {
          $scope.skillCompet = data.data;
        },
        function (data) {
          $scope.skillCompet = "Unable to load";
        })};
}]);

/**
 * Created by clement on 06/05/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name projetCv2App.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the projetCv2App
 */

angular.module('projetCv2App')
  .controller('CreateCtrl', function ($scope, $http, $routeParams, commandCV) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.createUser = function(user) {
      //  $scope.master = angular.copy(user);
      console.log(user);
      commandCV.add("Users", user,
        function (bingo) {
          console.log(bingo);
          document.location.href="#/update/"+bingo.data.id;

        },
        function (error) {
          console.log(error);
        }
      );
    }



  });

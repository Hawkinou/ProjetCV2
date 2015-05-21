/**
 * Created by clement on 14/05/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name projetCv2App.controller:UpdateCtrl
 * @description
 * # UpdateCtrl
 * Controller of the projetCv2App
 */

angular.module('projetCv2App')
  .controller('UpdateCtrl', ['$scope', '$http', '$routeParams', 'commandCV', function ($scope, $http, $routeParams, commandCV) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



    commandCV.getUser($routeParams.userId, function (data) {
        $scope.currentUser = data.data;
      },
      function (data) {
        $scope.currentUser = "Unable to load";
      }
    );

    $scope.updateUser = function(user) {
      console.log(user);

      commandCV.update(user, $routeParams.userId,
        function (bingo) {
          console.log(bingo);
        },
        function (error) {
          console.log(error);
        }
    )};
    $scope.getFormation = function() {

      commandCV.getInfo("Formations", $routeParams.userId, function (data) {
          $scope.userFormation = data.data;
        },
        function (data) {
          $scope.userFormation = "Unable to load";
        })};
    $scope.getExp = function() {

      commandCV.getInfo("Experiences", $routeParams.userId, function (data) {
          $scope.userExp = data.data;
        },
        function (data) {
          $scope.userExp = "Unable to load";
        })};
    $scope.getSkill = function() {
      commandCV.getInfo("Skills", $routeParams.userId, function (data) {
          $scope.userSkill = data.data;
        },
        function (data) {
          $scope.userSkill = "Unable to load";
        })};
    $scope.getCompet = function(skill) {
      commandCV.getInfo2(skill.id, function (data) {
          $scope.skillCompet = data.data;
        },
        function (data) {
          $scope.skillCompet = "Unable to load";
        })};

    $scope.getProject = function() {
      commandCV.getInfo("Projects", $routeParams.userId, function (data) {
          $scope.userProject = data.data;
        },
        function (data) {
          $scope.userProject = "Unable to load";
        })};


    $scope.delete = function(nomTable, user) {
      commandCV.delete(nomTable,user,user.id,
        function (bingo) {
          console.log(bingo);
        },
        function (error) {
          console.log(error);
        }

      )
      if(nomTable="Users")
      document.location.href="#/";
    };

    $scope.ajoutChamp = function(nomChamp){

      if(nomChamp=="showFormation") {
        $scope.showFormation = true;
      }
      if(nomChamp=="showSkill") {
        $scope.showSkill = true;
      }
      if(nomChamp=="showProject") {
        $scope.showProject = true;
      }
      if(nomChamp=="showExperience") {
        $scope.showExperience = true;
      }

      if(nomChamp=="showCompet") {
        $scope.showCompet = true;
      }
    };
    $scope.createFormation = function(formation){
      console.log(formation);
      commandCV.add("Formations", formation,
        function (bingo) {
          commandCV.updateUser("Formations",bingo.data.id,$routeParams.userId,
            function (bingo) {
              $scope.getFormation();

            },
            function (error) {
              console.log(error);
            });
        },
        function (error) {
          console.log(error);
        }
      );
      $scope.showFormation = false;
    }

    $scope.createProject = function(project){
      console.log(project);
      commandCV.add("Projects", project,
        function (bingo) {
          commandCV.updateUser("Projects",bingo.data.id,$routeParams.userId,
            function (bingo) {
              $scope.getProject();

            },
            function (error) {
              console.log(error);
            });
        },
        function (error) {
          console.log(error);
        }
      );
      $scope.showProject = false;
    }

    $scope.createExp = function(exp){
      console.log(exp);
      commandCV.add("Experiences", exp,
        function (bingo) {
          commandCV.updateUser("Experiences",bingo.data.id,$routeParams.userId,
            function (bingo) {
              $scope.getExp();

            },
            function (error) {
              console.log(error);
            });
        },
        function (error) {
          console.log(error);
        }
      );
      $scope.showExperience = false;
    }
    $scope.createSkill = function(skill){
      console.log(skill);
      commandCV.add("Skills", skill,
        function (bingo) {
          commandCV.updateUser("Skills",bingo.data.id,$routeParams.userId,
            function (bingo) {
              $scope.getSkill();

            },
            function (error) {
              console.log(error);
            });
        },
        function (error) {
          console.log(error);
        }
      );
      $scope.showSkill = false;
    }
    $scope.createComp = function(comp,skill){
      console.log(comp);
      commandCV.add("Competences", comp,
        function (bingo) {
          commandCV.updateSkill(bingo.data.id,skill.id,
            function (bingo) {
              $scope.getCompet(skill);

            },
            function (error) {
              console.log(error);
            });
        },
        function (error) {
          console.log(error);
        }
      );
      $scope.showCompet = false;
    }
    $scope.getFormation();
    $scope.getProject();
    $scope.getExp();
    $scope.getSkill();


  }]);

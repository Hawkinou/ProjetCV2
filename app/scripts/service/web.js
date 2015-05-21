'use strict';

angular.module('projetCv2App')
	.service("commandCV",["$http", function commandCV($http){
	var url='http://localhost:3000/api';
	this.getUser = function(userId, successCB, errorCB){
				$http.get(url+"/Users/"+userId)
				.success(function(data){
					if (data.status==='success'){
						successCB(data);
					} else {
					    errorCB(data);
					}
				})};
    this.getInfo = function(nomTable, userId, successCB, errorCB){
      $http.get(url+"/Users/"+userId+'/'+nomTable)
        .success(function(data){
          if (data.status==='success'){
            successCB(data);
          } else {
            errorCB(data);
          }
        })};
    this.getInfo2 = function(skillID, successCB, errorCB){
      $http.get(url+"/Skills/"+skillID+'/Competences')
        .success(function(data){
          if (data.status==='success'){
            successCB(data);
          } else {
            errorCB(data);
          }
        })};
	this.get = function(successCB, errorCB){
				$http.get(url+"/Users")
				.success(function(data){
					if (data.status==='success'){
						successCB(data);
					} else {
					    errorCB(data);
					}
				})};
	this.add = function (nomTable, userInfo, successCB, errorCB){
				$http.post(url+"/"+nomTable,userInfo)
				.success(function(data){
					if (data.status=='success'){
						successCB(data);
					} else {
					    errorCB(data);
					}
				})};
  this.update = function (userInfo, userID, successCB, errorCB){
        $http.put(url+'/Users/'+userID, userInfo)
        .success(function(data){
          if (data.status=='success'){
            successCB(data);
          } else {
            errorCB(data);
          }
        })};
    this.updateUser = function (nomTable,infoID, userID, successCB, errorCB){
      $http.put(url+'/Users/'+userID+'/'+nomTable+'/'+infoID)
        .success(function(data){
          if (data.status=='success'){
            successCB(data);
          } else {
            errorCB(data);
          }
        })};
    this.updateSkill = function (infoID, userID, successCB, errorCB){
      $http.put(url+'/Skills/'+userID+'/Competences/'+infoID)
        .success(function(data){
          if (data.status=='success'){
            successCB(data);
          } else {
            errorCB(data);
          }
        })};
    this.delete = function (nomTable,userInfo, userID, successCB, errorCB){
      $http.delete(url+'/'+nomTable +'/'+userID, userInfo)
        .success(function(data){
          if (data.status=='success'){
            successCB(data);
          } else {
            errorCB(data);
          }
        })};
}]);

'use strict';

angular.module('projetCv2App')
	.service("commandCV",["$http", function commandCV($http){
	var url='http://poo-ihm-2015-rest.herokuapp.com/api/Users';
	this.get = function(userId, successCB, errorCB){
				$http.get(url)
				.success(function(data){
					if (data.status==='success'){
						successCB(data);
					} else {
					    errorCB(data);
					}
				})};
	this.get = function(successCB, errorCB){
				$http.get(url)
				.success(function(data){
					if (data.status=='success'){
						successCB(data);
					} else {
					    errorCB(data);
					}
				})};
	this.add = function (userName, userSurname, successCB, errorCB){
				$http.post(url)
				.success(function(data){
					if (data.status=='success'){
						successCB(data);
					} else {
					    errorCB(data);
					}
				})};
}]);
monApp.factory("User","$http", function ($http){
	var obj={ get : function(userId){
				$http.get()
				.succes()
				.error();
				}
			  delete : function(userId){
				$http.delete()
				.succes()
				.error();
				}
		}
	return obj;
}
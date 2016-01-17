(function () {
	angular.module("todoApp")
			.controller("todoController",
				["$scope", "todoResource",function($scope , todoResource) {
					
					var todo = this;
					
					todoResource.getAll().query().$promise.then(function(data){
						
						todo.list = data;
						
					})
					
					
					
				}]
			);
}());
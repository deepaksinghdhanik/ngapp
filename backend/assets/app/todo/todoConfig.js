(function() {
 'use strict';
  angular
	.module('todoApp')
	.config(["$stateProvider",
			"$urlRouterProvider",
			"$locationProvider",
				function ($stateProvider, $urlRouterProvider , $locationProvider) 
				{
				
				$locationProvider.html5Mode(true);
				
				$urlRouterProvider.otherwise("/");
				$stateProvider
					.state('home', {
							abstract:true,
							templateUrl: 'app/common/templates/home.html',
						  })
					.state('toDoList', {
						url:'/',
						parent:'home',
						controller:'todoController as todo',
						templateUrl:'app/todo/templates/list.html'
					})
					;
				}]);
  
})();
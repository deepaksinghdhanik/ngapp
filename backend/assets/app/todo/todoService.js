  angular
      .module('todoApp')
      .factory('todoResource', todoResource);

	 function todoResource($resource) {
		 
		  var service = {
			  getAll: getAll,

		  };
		  return service;

		  ////////////

		  function getAll() {
			  return $resource('http://localhost:1337/api/todo/:id', { id: '@_id' }, {
				update: {
				  method: 'PUT'
				}
			  });
		  };


	  }
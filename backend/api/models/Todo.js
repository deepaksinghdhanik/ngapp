/**
* Todo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	autoCreatedAt: false,
	autoUpdatedAt: false,
	schema:true,
	attributes: {
		task:{
			type:'string',
			required:true
		},
		description:{
			type:'string'		
		},
		complete:{
			 type : "boolean",
			 defaultsTo : false
		},
		duedate:{
			type:'date'
		}
	}
};


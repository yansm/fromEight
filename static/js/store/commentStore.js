var $ = require('zepto');
var ajax = require('tool/ajax');

var storeManager = {
	
	addCom: function (data,callback) {
		// body...
		ajax({
			url:'/comment/add',
			callback:callback,
			data:data
		});
	},
	listCom: function (data, callback) {
		ajax({
			url:'/comment/list',
			callback:callback,
			data:data
		});
	},
	
} 

module.exports = storeManager; 
var $ = require('zepto');
var ajax = require('tool/ajax');

var storeManager = {
	
	addArt: function (data,callback) {
		// body...
		ajax({
			url:'/article/add',
			callback:callback,
			data:data
		});
	},
	listArt: function (data, callback) {
		ajax({
			url:'/article/list',
			callback:callback,
			data:data
		});
	},
	queryById: function (data, callback) {
		ajax({
			url:'/article/queryById',
			callback:callback,
			data:data
		});
	}
	
} 

module.exports = storeManager; 
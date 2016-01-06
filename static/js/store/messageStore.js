var $ = require('zepto');
var ajax = require('tool/ajax');

var storeManager = {
	
	addMsg: function (data,callback) {
		// body...
		ajax({
			url:'/message/add',
			callback:callback,
			data:data
		});
	},
	listMsg: function (data, callback) {
		ajax({
			url:'/message/list',
			callback:callback,
			data:data
		});
	}
	
} 

module.exports = storeManager; 
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
	
} 

module.exports = storeManager;
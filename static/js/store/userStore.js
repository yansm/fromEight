var $ = require('zepto');
var ajax = require('tool/ajax');

var storeManager = {
	getUserInfo: function(callback) {
		ajax({
			url:'/user/info',
			type: 'get',
			callback: callback
		}); 
	},
	addStu: function (data,callback) {
		// body...
		ajax({
			url:'/user/check',
			callback:callback,
			data:data
		});
	},
	addUser: function (data,callback) {
		// body...
		ajax({
			url:'/user/add',
			callback:callback,
			data:data
		});
	},
	list: function (data, callback) {
		ajax({
			url: '/user/list',
			callback: callback,
			data: data
		})
	},
	getTicket: function (data, callback){
		ajax({
			url: '/weixin/ticket',
			callback: callback,
			data: data
		})
	}
} 

module.exports = storeManager;
var $ = require('zepto');
var ajax = require('tool/ajax');



var Data = {};

var storeManager = {
	getEssay: function(url, callback){
		ajax({
			url: url,
			type:'get',
			callback:callback
		})
	}
}

module.exports = storeManager;
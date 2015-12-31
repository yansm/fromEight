var $ = require('zepto');
var ajax = require('tool/ajax');



var Data = {};

var storeManager = {
	getList1:function(callback){
		var data = {
			list:[
				{
					title:'非诚勿扰，非礼勿视',
					author: '闫三木',
					time: '2010-11-08',
					url: './essay/2010-11-08-feichegnwurao.json'
				},{
					title:'三俗少年',
					author: '吕成',
					time: '2015-12-23',
					url: './essay/2015-12-23-sansu.json'
				}
			]
		}
		callback&& callback(data);
	},
	getList2:function(callback){
		var data = {
			list:[
				{
					title:'八班往事',
					author: '闫三木',
					time: '2015-12-23',
					url: './essay/2015-12-23-baban.json'
				}
			]
		}
		callback&& callback(data);
	},
	getList3:function(callback){
		var data = {
			list:[
				{
					title:'二货少年',
					author: '李园',
					time: '2015-12-24',
					url: './video/erhuoshaonian.mp4'
				}
			]
		}
		callback&& callback(data);
	}
}

module.exports = storeManager;
var $ = require('zepto');
var attachFastClick = require('fastclick');
var pageManager = require('manager/pageManager');

var sha1 = require('tool/sha1');
var cookie = require('plugin/jquery.cookie');
var localStorageManager = require('plugin/localStorageManager');

var userStore = require('store/userStore');
var ajax = require('tool/ajax');

require('plugin/form');


var getUrlVar = require('tool/getUrlVar'); 

attachFastClick(document.body); 
 
 

$(function () { 
	var url = location.href,
		module = getUrlVar(url, 'module') || 'main'
		
	
	userStore.getUserInfo(function(res){
		if(!res.code){
			if(res.data && res.data.length){
				//alert(JSON.stringify(res.data)); 
				pageManager.init($('body'),module);
				pageManager.buildMenu(res.data[0]);
			}else{
				pageManager.init($('body'), 'regstu');
			} 
		}else{

			pageManager.init($('body'),'main'); 
			pageManager.buildMenu({nickName:'三木',userName:'闫三木',stuNum:'20093514',userHead: '../images/welcome1.jpg'});
		}
	});
	
			 	
	
	$(document)
		.on('click','[data-toggle="next"]', function (e) { 
			var $this = $(this), target = $this.data('target');  
			pageManager.next(target);
		}) 
		.on('click','[data-toggle="prev"]', function (e) { 
			var $this = $(this), target = $this.data('target'); 
			pageManager.prev(target);
		})
	

}); 
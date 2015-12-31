var $ = require('zepto');
var attachFastClick = require('fastclick');
var pageManager = require('manager/pageManager');
var menusManager = require('plugin/menus');
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
				pageManager.init($('body'),module);
			}else{
				pageManager.init($('body'), 'regstu');
			}
		}else{
			pageManager.init($('body'),'regstu');
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
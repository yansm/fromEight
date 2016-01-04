var $ = require('zepto');
var messageComponent = require('component/messageComponent');

var tpl = 
	'<header class="addmsg-head" id="addmsg-head"><div class="left-icon back-icon" data-toggle="prev" data-target="message"></div></header>'
		+'<section class="addmsg-area" id="addmsg-area">'
			+'<div class="container no-padding">'
				
			+'</div>' 
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	//needReload: true,
} 
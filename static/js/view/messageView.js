var $ = require('zepto');
var messageComponent = require('component/messageComponent');

var tpl = 
	'<header class="message-head" id="message-head"><div class="left-icon back-icon" data-toggle="fadein" data-target="main"></div></header>'
		+'<section class="message-area" id="message-area">'
			+'<div class="container no-padding">'
				+'<div class="message-top"></div>'
				+'<div class="message-add" data-toggle="next" data-target="addmsg"></div>'
			+'</div>' 
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	messageComponent.buildMsgTop($view.find('.message-top'), pageManager);
	callback && callback();
} 

module.exports = {
	tpl: tpl, 
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
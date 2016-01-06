var $ = require('zepto');
var messageComponent = require('component/messageComponent');

var tpl = 
	'<header class="message-head" id="message-head"><div class="left-icon back-icon" data-toggle="fadein" data-target="main"></div></header>'
		+'<section class="message-area" id="message-area">'
			+'<div class="container no-padding">'
				+'<div class="message-top"></div>'
				+'<div class="message-add" data-toggle="next" data-target="addmsg"></div>'
				+'<div class="message-list"  data-toggle="feeds" data-type="list"><div class="feeds-list"></div><div class="toolbar">'
					+'<div class="toolbar-loaded"></div>'
					+'<div class="toolbar-loading">更新中···</div>'
					+'<div class="toolbar-end">到底了</div>'
				+'</div></div>'
			+'</div>' 
		+'</section>'
		
var hiddenEvent = function (view){
	var pageManager = this;
	messageComponent.removeMsgList(view.content.find('.message-list'), pageManager);
};

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	messageComponent.buildMsgTop($view.find('.message-top'), pageManager);
	messageComponent.buildMsgList($view.find('.message-list'), pageManager);
	callback && callback();
} 

module.exports = {
	tpl: tpl, 
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
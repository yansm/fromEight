var $ = require('zepto');
var messageComponent = require('component/messageComponent');

var tpl = 
	'<header class="addmsg-head" id="addmsg-head"><div class="left-icon back-icon" data-toggle="prev" data-target="message"></div></header>'
		+'<section class="addmsg-area" id="addmsg-area">'
			+'<div class="container no-padding">'
				+'<div id="addMsgForm" class="msg-form" role="form">'
					+'<div class="form-group">'
						+'<div class="form-control" id="shopType"><textarea name="content" placeholder="说点什么···" data-required=true data-validate="msg"></textarea></div>'
					+'</div>'
					+'<div class="form-group images-area fix">'
						+'<div class="images-add" data-toggle="addImg"></div>'
						+'<input name="images" type="hidden">'
					+'</div>'
					+'<div class="msg-btn" data-toggle="submit">发布</div>'
				+'<div>'
			+'</div>' 
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this; 
	messageComponent.buildAddForm($view.find('#addMsgForm'), pageManager);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
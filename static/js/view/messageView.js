var $ = require('zepto');
var listComponent = require('component/listComponent');

var tpl = 
	'<header class="message-head" id="message-head"><div class="left-icon back-icon" data-toggle="fadein" data-target="main"></div></header>'
		+'<section class="message-area" id="message-area">'
			+'<div class="container no-padding">'
				
			+'</div>'
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	//listComponent.buildList1($view.find('#list1'), pageManager);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
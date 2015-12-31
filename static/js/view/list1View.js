var $ = require('zepto');
var listComponent = require('component/listComponent');

var tpl = 
	'<header class="list-head" id="list1-head"><div class="left-icon back-icon" data-toggle="prev" data-target="main"></div>原味斋<div class="right-icon empty-icon"></div></header>'
		+'<section class="list-area" id="list1-area">'
			+'<div class="container no-padding">'
				+'<div class="list-list" id="list1"></div>'
			+'</div>'
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	listComponent.buildList1($view.find('#list1'), pageManager);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
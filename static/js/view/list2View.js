var $ = require('zepto');
var listComponent = require('component/listComponent');

var tpl = 
	'<header class="list-head" id="list2-head"><div class="left-icon back-icon" data-toggle="prev" data-target="main"></div>故事会<div class="right-icon empty-icon"></div></header>'
		+'<section class="list-area" id="list2-area">'
			+'<div class="container no-padding">'
				+'<div class="list-list" id="list2"></div>'
			+'</div>'
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	listComponent.buildList2($view.find('#list2'), pageManager);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
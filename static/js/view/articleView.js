var $ = require('zepto');
var articleComponent = require('component/articleComponent');

var tpl = 
	'<header class="article-head" id="article-head"><div class="left-icon back-icon" data-toggle="fadein" data-target="main"></div></header>'
		+'<section class="article-area" id="article-area">'
			+'<div class="container no-padding">'
				+'<div class="message-add article-add" data-toggle="next" data-target="addart"></div>'
				+'<div class="article-list"  data-toggle="articles" data-type="list"><div class="feeds-list"></div><div class="toolbar">'
					+'<div class="toolbar-loaded"></div>'
					+'<div class="toolbar-loading">更新中···</div>'
					+'<div class="toolbar-end">到底了</div>'
				+'</div></div>'
			+'</div>' 
		+'</section>'
		
var hiddenEvent = function (view){
	var pageManager = this;
};

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	articleComponent.buildArtList($view.find('.article-list'), pageManager);
	callback && callback();
} 
 
module.exports = {
	tpl: tpl, 
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
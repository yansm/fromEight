var $ = require('zepto');
var articleComponent = require('component/articleComponent');

var tpl = 
	'<header class="detailart-head" id="detailart-head"><div class="left-icon back-icon" data-toggle="prev" data-target="article"></div></header>'
		+'<section class="detailart-area" id="detailart-area">'
			+'<div class="container no-padding">'
				+'<div class="article-box">'
					+'<div class="article-top"><h2 data-target="title"></h2><aside><span class="author" data-target="author"></span><span class="time" data-target="time"></span></aside></div>'
					+'<div class="article-content" data-target="content"></div>'
					+'<div class="article-bar fix"></div>'
				+'</div>'
				
			+'</div>' 
		+'</section>'
		
var hiddenEvent;

var showEvent;
 
var buildPage = function($view, callback, config) {
	var pageManager = this; 
	articleComponent.buildArticle($view.find('.article-box'), pageManager, config.id);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
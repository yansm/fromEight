var $ = require('zepto');
var articleComponent = require('component/articleComponent');
var commentComponent = require('component/commentComponent');

var tpl = 
	'<header class="detailart-head" id="detailart-head"><div class="left-icon back-icon" data-toggle="prev" data-target="article"></div></header>'
		+'<section class="detailart-area" id="detailart-area">'
			+'<div class="container no-padding">'
				+'<div class="article-box">'
					+'<div class="article-top"><h2 data-target="title"></h2><aside><span class="author" data-target="author"></span><span class="time" data-target="time"></span></aside></div>'
					+'<div class="article-content" data-target="content"></div>'
					+'<div class="article-bar fix"></div>'
				+'</div>'
				+'<div class="comment-list"  data-toggle="feeds" data-type="list"><div class="feeds-list"></div><div class="toolbar">'
					+'<div class="toolbar-loaded"></div>'
					+'<div class="toolbar-loading">更新中···</div>'
					+'<div class="toolbar-end">到底了</div>'
				+'</div></div>'
			+'</div>' 
		+'</section>'
		
var hiddenEvent = function (view){
	var pageManager = this;
	commentComponent.removeComList(view.content.find('.comment-list'), pageManager);
};

var showEvent;
 
var buildPage = function($view, callback, config) {
	var pageManager = this; 
	articleComponent.buildArticle($view.find('.article-box'), pageManager, config.id);
	commentComponent.buildComList($view.find('.comment-list'), pageManager, config.id);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
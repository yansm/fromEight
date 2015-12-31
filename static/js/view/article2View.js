var $ = require('zepto');
var essayComponent = require('component/essayComponent');

var tpl = 
	'<header class="article-head" id="article2-head"><div class="left-icon back-icon" data-toggle="prev" data-target="list2"></div><span class="head-title ell" style="width:500px;"></span><div class="right-icon empty-icon"></div></header>'
		+'<section class="article-area" id="article2-area">'
			+'<div class="container">'
				+'<div class="article-box"></div>'
			+'</div>'
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback,config) {
	var pageManager = this;
	essayComponent.buildEssay($view,config);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
var $ = require('zepto');
var articleComponent = require('component/articleComponent');

var tpl = 
	'<header class="addart-head" id="addart-head"><div class="left-icon back-icon" data-toggle="prev" data-target="article"></div></header>'
		+'<section class="addart-area" id="addart-area">'
			+'<div class="container no-padding">'
				+'<div id="addArtForm" class="msg-form" role="form">'
					+'<div class="form-group">'
						+'<div class="form-control"><input type="text" class="title"  name="title" placeholder="标题···" data-required=true></div>'
					+'</div>'
					+'<div class="form-group">'
						+'<div class="form-control"><textarea name="content" placeholder="写点什么···" data-required=true></textarea></div>'
					+'</div>'
					+'<div class="form-group dn">'
						+'<div class="form-control"><input type="hidden" name="id"></div>'
					+'</div>'
					+'<div class="msg-btn" data-toggle="submit">发布</div>'
				+'<div>'
			+'</div>' 
		+'</section>'
		
var hiddenEvent;

var showEvent;
 
var buildPage = function($view, callback) {
	var pageManager = this; 
	articleComponent.buildAddForm($view.find('#addArtForm'), pageManager);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
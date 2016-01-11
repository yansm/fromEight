var $ = require('zepto');
var commentComponent = require('component/commentComponent');

var tpl = 
	'<header class="addcom-head" id="addcom-head"><div class="left-icon back-icon"></div></header>'
		+'<section class="addcom-area" id="addcom-area">'
			+'<div class="container no-padding">'
				+'<div id="addComForm" class="msg-form" role="form">'
					+'<div class="form-group">'
						+'<div class="form-control"><textarea name="content" placeholder="回复点什么···" data-required=true data-validate="msg"></textarea></div>'
					+'</div>'
					+'<div class="form-group dn">'
						+'<input name="parentId" type="hidden">'
					+'</div>'
					+'<div class="form-group dn">'
						+'<input name="type" type="hidden">'
					+'</div>'
					+'<div class="form-group dn">'
						+'<input name="reId" type="hidden">'
					+'</div>'
					+'<div class="msg-btn" data-toggle="submit">回复</div>'
				+'<div>'
			+'</div>' 
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback, config) {
	var pageManager = this; 
	$view.find('.back-icon').on('click',function (){
		pageManager.prev('detailart', config);
		
	})
	commentComponent.buildAddForm($view.find('#addComForm'), pageManager, config);
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
} 
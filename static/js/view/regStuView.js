var $ = require('zepto');

var userComponent = require('component/userComponent');

var tpl = 
	'<header class="regstu-head" id="regstu-head"></header>'
		+'<section class="regstu-area" id="regstu-area">'
			+'<div class="container">'
				+'<div rolr="form" id="regStuForm" class="form" >'
					+'<div class="head-logo head-logo-stunum"></div>'
					+'<div class="form-group comb">'
						+'<div class="form-control"><input name="stuNum"  type="text" data-required=true  placeholder="学号"></div><div class="btn regstu-btn" data-toggle="submit"></div>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</section>'
		
var hiddenEvent;

var showEvent; 

var buildPage = function($view, callback) {
	var pageManager = this; 
	userComponent.buildStuForm($view.find('#regStuForm'),pageManager);
	callback && callback(); 
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true
} 
 
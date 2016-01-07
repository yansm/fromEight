var $ = require('zepto');

var userComponent = require('component/userComponent');

var tpl = 
	'<header class="main-head" id="main-head"></header>'
		+'<section class="main-area" id="main-area">'
			+'<div class="container no-padding">'
				+'<div class="logo-area"></div>'
				+'<div class="main-box main-box-1" data-toggle="fadeout" data-target="article"></div>'
				+'<div class="main-aside">'
					+'<p>终究过去再回不去</p>'
					+'<p style="text-indent:1.5em;">但是至少还留有回忆</p>'
					+'<p style="text-indent:3em;">每个人，每件事，都清清楚楚</p>'
				+'</div>'
				+'<div class="main-box main-box-2" data-toggle="fadeout" data-target="message"></div>'
				+'<div class="main-aside">'
					+'<p>过去的每一个故事</p>'
					+'<p style="text-indent:1.5em;">与未来的每一份期待</p>'
					+'<p style="text-indent:3em;">也许都将成为这里的一组足迹</p>'
				+'</div>'
				+'<div class="main-userlist"><h2>最近加入的同学</h2></div>'
			+'</div>'
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	userComponent.newUserList($view.find('.main-userlist'));
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage
}
 
var $ = require('zepto');

var userComponent = require('component/userComponent');

var tpl = 
	'<header class="reguser-head" id="reguser-head"><div class="left-icon back-icon" data-toggle="prev" data-target="regstu"></header>'
		+'<section class="reguser-area" id="reguser-area">'
			+'<div class="container">'
				+'<div rolr="form" id="regUser" class="form" >'
					+'<div class="head-logo head-logo-stunum">请查看信息是否正确</div>'
					+'<div class="form-group">'
						+'<div class="form-control"><input name="userName"  type="text" data-required=true  placeholder="姓名"></div>'
					+'</div>'
					+'<div class="form-group">'
						+'<div class="form-control"><input name="nickName"  type="text" data-required=true  placeholder="昵称"></div>'
					+'</div>'
					+'<div class="form-group comb">'
						+'<div class="form-control"><input name="stuNum" disabled  type="text" data-required=true  placeholder="学号"></div><div class="btn regstu-btn" data-toggle="submit"></div>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</section>'
		
var hiddenEvent;

var showEvent; 

var buildPage = function($view, callback, config) {
	var pageManager = this; 
	$view.find('[name="userName"]').val(config.userName);
	$view.find('[name="nickName"]').val(config.nickName);
	$view.find('[name="stuNum"]').val(config.stuNum);
	userComponent.buildUserForm($view.find('#regUser'),pageManager);
	callback && callback(); 
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true
} 
 
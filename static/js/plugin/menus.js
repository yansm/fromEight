var $ = require('zepto');

var $body = $('body');
var $menu, $head;
var USERDATA;

var menusManager = {
	/**
	 * [buildMenu 建立个人菜单]
	 * yansanmu 
	 * @DateTime 2016-01-01T19:31:48+0800
	 * @param    {[type]}                 data [description]
	 * @return   {[type]}                      [description]
	 */
	buildMenu: function (data) { 
		// body...
		var userName = data.userName, 
			nickName = data.nickName,
			userHead = data.userHead,
			stuNum = data.stuNum,
			name = nickName?(nickName+'('+ userName +')'): userName;
		var headHtml = [], menuHtml = [];
		headHtml.push('<div class="menu-head" data-toggle="showMenu"><img src="'+ userHead +'"></div>');
		menuHtml.push('<div class="menu-area"><div class="menu-bg"></div><div class="menu-container"><div class="menu-close" data-toggle="hideMenu">&times;</div>');
		menuHtml.push('<div class="menu-top ovh"><div class="menu-photo"><img src="'+ userHead +'"></div><div class="menu-info ell">'+ name +'<aside></aside></div></div>');
		menuHtml.push('<div class="menu-box">');
		menuHtml.push('<div class="menu-item">已经加入的同学</div>');
		menuHtml.push('</div></div></div>');

		$menu = $(menuHtml.join('')).appendTo($body);
		$head = $(headHtml.join('')).appendTo($body);

		USERDATA = data;
		
		$(document).on('touchmove','.menu-area', function(e){
			e.preventDefault();
		});
	},
	/**
	 * [showMenu 打开个人菜单]
	 * yansanmu 
	 * @DateTime 2016-01-01T23:50:06+0800
	 * @return   {[type]}                 [description]
	 */
	showMenu: function (callback){
		$menu.show().find('.menu-container').css({
			'-webkit-transform':'translate(600px,0)',
			'transform':'translate(600px,0)',
		});
		setTimeout(function(){
			$menu.addClass('in').find('.menu-container').css({
				'-webkit-transform':'translate(0,0)',
				'transform':'translate(0,0)',
			});
		},0)
		setTimeout(function(){
			callback && callback();
		},500);
	},
	/**
	 * [hideMenu 关闭个人菜单]
	 * yansanmu 
	 * @DateTime 2016-01-02T01:00:17+0800
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	hideMenu: function(callback){
		$menu.removeClass('in').find('.menu-container').css({
			'-webkit-transform':'translate(600px,0)',
			'transform':'translate(600px,0)',
		});
		setTimeout(function(){
			$menu.hide();
			callback && callback();
		}, 500);
	},
	/**
	 * [getUserInfo 返回用户信息]
	 * yansanmu 
	 * @DateTime 2016-01-04T23:28:08+0800
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	getUserInfo: function(callback){
		return USERDATA;
	}
}

 
 

module.exports = menusManager;
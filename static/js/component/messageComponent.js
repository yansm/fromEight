var $ = require('zepto');
var menus = require('plugin/menus')

var storeComponent = {
	buildMsgTop: function($item, pManager){
		var data = menus.getUserInfo(),
			userHead = data.userHead;
		var html = '<div class="message-img"><img src="'+ userHead +'"></div>'
		$item.append(html);
	}
}

module.exports = storeComponent;  
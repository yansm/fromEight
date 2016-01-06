var $ = require('zepto');
var menus = require('plugin/menus')
var messageStore = require('store/messageStore');
var feeds = require('plugin/feeds');

var paging = require('plugin/paging');

var storeComponent = {
	/**
	 * [buildMsgTop 给状态墙加头像]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-05T18:05:38+0800
	 * @param    {[type]}                 $item    [description]
	 * @param    {[type]}                 pManager [description]
	 * @return   {[type]}                          [description]
	 */
	buildMsgTop: function($item, pManager){
		var data = menus.getUserInfo(),
			userHead = data.userHead;
		var html = '<div class="message-img"><img src="'+ userHead +'"></div>'
		$item.append(html);
	},
	/**
	 * [buildAddForm 设置add msg表单]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-05T18:06:02+0800
	 * @param    {[type]}                 $item    [description]
	 * @param    {[type]}                 pManager [description]
	 * @return   {[type]}                          [description]
	 */
	buildAddForm: function($item, pManager){
		$item.formValidate(); 
		var $submit = $item.find('[data-toggle=submit]');
		$item.on('click', '[data-toggle="submit"]', function () {
			$item.formValidate('checkForm', function (flag){  
				if(!flag) return;
				$item.formValidate('submit', function (data) { 
					//alert(JSON.stringify(data));
					messageStore.addMsg(data, function (e) {
						if(e.code){
							pManager.showErr(e.msg||'发布失败');
							$item.formValidate('resetSubmit'); 
						}else{
							$item.find('[name="content"]').val('');
							pManager.prev('message');
						}
					});
				});
			})
		}).on('bsFormValid', function (e, flags) {
			if(flags.content) $submit.addClass('able');
			else $submit.removeClass('able');
		}) 
	},
	/**
	 * [buildMsgList 设置msg list]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-06T14:10:37+0800
	 * @param    {[type]}                 $item    [description]
	 * @param    {[type]}                 pManager [description]
	 * @return   {[type]}                          [description]
	 */
	buildMsgList: function ($item, pManager){
		feeds($item,{});
	},
	removeMsgList: function ($item, pManager){ 
		feeds($item,'removeScroll');
	}
}

module.exports = storeComponent;  
var $ = require('zepto');
var menus = require('plugin/menus')
var articleStore = require('store/articleStore');
var feeds = require('plugin/feeds');
var paging = require('plugin/paging');

var format = require('tool/format');

var storeComponent = {
	/**
	 * [buildAddForm 添加文章]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-07T16:19:30+0800
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
					articleStore.addArt(data, function (e) {
						//alert(e.data.content.replace(/(.+)/g, '<p>$1</p>'));
						if(e.code){
							pManager.showErr(e.msg||'发布失败');	
							$item.formValidate('resetSubmit'); 
						}else{
							$item.find('[name="content"]').val('');
							pManager.prev('detailart', $.extend({fromAdd: true},e.data)) ;
						}
					});
				});
			})
		}).on('bsFormValid', function (e, flags) {
			if(flags.content&&flags.title) $submit.addClass('able');
			else $submit.removeClass('able');
		}) 
	}, 
	buildArtList: function ($item, pManager){
		feeds($item,{listFn: articleStore.listArt});
	},
	removeArtList: function ($item, pManager){ 
		feeds($item,'removeScroll');
	},
	buildArticle: function ($item, pManager, id){
		articleStore.queryById({id:id}, function (e) {
			if(e.code || !e.data.length){
				pManager.showErr(e.msg||'文章不存在');
			}else{
				var data = e.data[0],
					title = data.title,
					content = data.content.replace(/(.+)/g, '<p>$1</p>'),
					createTime = format(new Date(+data.createTime), 'yyyy-MM-dd'),
					canWrite = data.canWrite,
					userName = data.userName, 
					nickName = data.nickName,
					name = nickName?(nickName+'('+ userName +')'): userName;
				$item.find('[data-target="title"]').html(title);
				$item.find('[data-target="time"]').html(createTime);
				$item.find('[data-target="author"]').html(name);
				$item.find('[data-target="content"]').html(content);

			}
			
		});
	}
	
}

module.exports = storeComponent;  
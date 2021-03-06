var $ = require('zepto');
var attachFastClick = require('fastclick');
var pageManager = require('manager/pageManager');

var cookie = require('plugin/jquery.cookie');
var localStorageManager = require('plugin/localStorageManager');

var userStore = require('store/userStore');
var ajax = require('tool/ajax');

require('plugin/form');

var scrollLoading = require('plugin/scrollLoading')


var getUrlVar = require('tool/getUrlVar'); 
 
attachFastClick(document.body); 

/*上传微信照片*/
var uploadImageFn = function (localIds, callback) {
	var localId = localIds[0];
	wx.uploadImage({
		localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
		isShowProgressTips: 1, // 默认为1，显示进度提示
		success: function (res) {
			var serverId = res.serverId; // 返回图片的服务器端ID
			//alert(JSON.stringify(arguments));
			$('<div class="images-box"><img class="" src="'+ localId +'"></div>').prependTo($parent);
			callback && callback(serverId);
			localIds.shift();
			if(localIds.length){
				uploadImageFn(localIds,callback);
			}
		},
		fail: function (res) {
			alert(JSON.stringify(arguments));
			pageManager.showErr('图片上传失败');
		}
	});
}

/*微信jssdk签名*/
 var wxReady = function (url){ 
	userStore.getTicket({url:url}, function(e) {
		if(e.code) return;
		 var data = e.data,
		 	timestamp = data.timestamp,
			nonceStr = data.nonceStr,
			signature = data.signature,
			appId = data.appId;
		 wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: appId, // 必填，公众号的唯一标识
			timestamp: timestamp, // 必填，生成签名的时间戳
			nonceStr: nonceStr, // 必填，生成签名的随机串
			signature: signature,// 必填，签名，见附录1
			jsApiList: [
				'chooseImage',     
				'previewImage',      
				'uploadImage',     
				'downloadImage',    
				'scanQRCode',     
			] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
		wx.ready(function () {
			//关闭顶部部分按钮
			wx.hideOptionMenu();

			$(document)
				//选择图片
				.on('click','[data-toggle="addImg"]',function () {
					var $this = $(this),serverIds = $this.data('serverIds')||[]; count = serverIds.length, $parent = $this.parent();
					if(count >= 9) {
						pageManager.showErr('最大可上传9张');
						return;
					}
					wx.chooseImage({
						count: 9-count, // 默认9
						success: function (res) {
							var localIds = res.localIds, length = localIds.length;
							
							setTimeout(function () { 
								$this.data('count', count+length);
								uploadImageFn(localIds, function (serverId) { 
									
									serverIds.push(serverId); 
									//alert(JSON.stringify(serverIds));
									
									$this.data('serverIds',serverIds);
									$parent.find('input').val(serverIds.join(','));
								})
								
							}, 100); 
							
						},
						error:function(){
							//alert(JSON.stringify(arguments));
						}
					});
				});

		});		
		wx.error(function(res){
			alert(JSON.stringify(res));
		});
	});


	

}

$(function () { 
	var url = location.href,
		module = getUrlVar(url, 'module') || 'main'
		
	wxReady(url);

	userStore.getUserInfo(function(res){
		if(!res.code){
			if(res.data && res.data.length){
				//alert(JSON.stringify(res.data)); 
				pageManager.init($('body'),module);
				pageManager.buildMenu(res.data[0]);
			}else{
				pageManager.init($('body'), 'regstu');
			} 
		}else{

			pageManager.init($('body'),'article'); 
			pageManager.buildMenu({nickName:'三木',userName:'闫三木',stuNum:'20093514',userHead: '../images/welcome1.jpg'});
		}
	});
	
			 	
	
	$(document)
		.on('click','[data-toggle="next"]', function (e) { 
			var $this = $(this), target = $this.data('target');  
			pageManager.next(target);
		}) 
		.on('click','[data-toggle="prev"]', function (e) { 
			var $this = $(this), target = $this.data('target'); 
			pageManager.prev(target);
		})
		.on('click','[data-toggle="fadeout"]', function (e) { 
			var $this = $(this), target = $this.data('target'); 
			pageManager.fadeout(target);
		})
		.on('click','[data-toggle="fadein"]', function (e) { 
			var $this = $(this), target = $this.data('target'); 
			pageManager.fadein(target);
		})
		.on('click', '[data-toggle="toArticle"]', function (e) {
			var $this = $(this), id = $this.data('id');
			pageManager.next('detailart',{id:id});
		})
		.on('click', '[data-toggle="commentArticle"]', function (e) {
			var $this = $(this), data = $this.data();
			pageManager.next('addcom',data);

		})
		
	scrollLoading();

}); 
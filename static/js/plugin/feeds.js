var $ = require('zepto');
var messageStore = require('store/messageStore');
var format = require('tool/format');
var paging = require('plugin/paging');
//var baguetteBox = require('plugin/baguetteBox');

var $menu = $('#menu');

 
var BuildFeeds = function (ele, options) {
	this.ele = $(ele);
	this.options = options;
	this.options.type = this.ele.data('type') || 'list';
	this[this.options.type]();
}

BuildFeeds.prototype.main = function () {
	var me = this;
	messageStore.listMsg({limit:3},function (e) {
		if(typeof e ==='string'){
			var data = JSON.parse(e), 
				list = me.buildList(data,-1);
			me.ele.prepend(list);
		}else{
			var data = e, 
				list = me.buildList(data,-1);
			me.ele.prepend(list);
		}
		
	});
	
}

BuildFeeds.prototype.removeScroll = function (){
	paging.clearScroll('cashlist');
};

BuildFeeds.prototype.list = function () {
	var me = this, $item = me.ele;
	
	paging.buildScroll('cashlist', $item, function (page, doneFn) {
		messageStore.listMsg({limit:5, stamp: page},function (e){
				var data = e.data;
					
				var stamp = data.length?data[data.length-1].createTime : -1,
					list = me.buildList(data, stamp);
				
				$item.data('page', stamp).find('.feeds-list').append(list);
				doneFn && doneFn(!!~stamp);			
		})
	});
	
	var $toolBar = $('.toolbar');
	
	$item.on('loadingPaging', function () { 
		$toolBar.addClass('loading');
	}).on('loadedPaging', function () {
		$toolBar.addClass('loading');
	}).on('endPaging', function () {
		$toolBar.removeClass('loading').addClass('end');
	})
	
}

BuildFeeds.prototype.buildList = function (data, stamp) { 
	var html = [];
	for(var i = 0,length = data.length; i < length; i ++) {
		var item = data[i], 
			content = item.content,
			userHead = item.userHead,
			userName = item.userName, 
			nickName = item.nickName,
			name = nickName?(nickName+'('+ userName +')'): userName,
			time = format(new Date(+item.createTime), 'yyyy-MM-dd hh:mm');
			
		
		html.push('<div class="feed-item"><div class="feed-head fix">');
		html.push('<img src="'+userHead+'" /><div class="l"><div class="feed-name">'+ name +'</div><div class="feed-time">'+time+'</div></div>');
		html.push('</div>');
		//	html.push(imgHtml);
		html.push('<div class="fees-desc">'+ content +'</div>');
		html.push('</div>');
			 
	}
	return html.join('');
}

BuildFeeds.prototype.buildImgs = function (data, stamp) {
	var length = data.length,  original = 'original', type = 'small', className = 'large'; 
	if(length > 1 && length <5){ type = 'tiny'; className = 'small' } 
	else if(length > 4){ type = 'tiny'; className = 'tiny'};
	
	var html = []; 
	html.push('<ul class="fix feed-photos '+ className +'" data-stamp="'+ stamp +'">');
	
	for(var i = 0; i < length; i ++){
		var img = data[i], photos = img.photos, url = decodeURIComponent(photos[type]) , originalUrl = decodeURIComponent(photos[original]), imgType = img.width > img.height ? 'wtype': 'htype'; 
		html.push('<li oUrl='+ originalUrl +'><div class="feed-frame">&nbsp;<img class="'+ imgType +'" xSrc="'+ url +'" />&nbsp;</div></li>')
	};
	
	html.push('</ul>');
	
	return html.join('');
	
}


BuildFeeds.DEFAULTS = {};

module.exports = function ($item, option) {
	$item.each(function (item) {   
		var $this = $(this)
			,data    = $this.data('teemoFeeds')
			,options = $.extend({}, BuildFeeds.DEFAULTS, typeof option == 'object' && option);
		  
		if (!data) $this.data('teemoFeeds', (data = new BuildFeeds(this, options)));
		if (typeof option == 'string') data[option]();
	});
};  
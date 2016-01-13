var $ = require('zepto');
var messageStore = require('store/messageStore');
var format = require('tool/format');
var paging = require('plugin/paging');
//var baguetteBox = require('plugin/baguetteBox');

var $menu = $('#menu');

var baguetteBox = require('plugin/baguetteBox');
baguetteBox();

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
	var listFn = this.options.listFn || messageStore.listMsg;
	paging.buildScroll('cashlist', $item, function (page, doneFn) {
		var data = {limit:5, stamp: page};
		if(typeof me.options.extVars === 'object'){
			data = $.extend(data, me.options.extVars);
		}
		listFn(data,function (e){
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
	var extVars = this.options.extVars||{};
	for(var i = 0,length = data.length; i < length; i ++) {
		var item = data[i], 
			content = item.content || '',
			title  = item.title || '',
			contentDesc = item.contentDesc || '',
			userHead = item.userHead,
			userName = item.userName, 
			nickName = item.nickName,
			author = item.author,
			id = item.id,
			name = nickName?(nickName+'('+ userName +')'): userName,
			time = format(new Date(+item.createTime), 'yyyy-MM-dd hh:mm'),
			imgHtml = this.buildImgs(item.images && JSON.parse(item.images)),
			comCount = item.comCount,
			canRe = item.canRe,
			reNickName = item.reNickName;
		html.push('<div class="feed-item" data-toggle="'+ (title?'toArticle':'toMessage') +'" data-id='+id+'>');
		html.push('<div class="feed-head fix">');
		html.push('<img src="'+userHead+'" /><div class="l"><div class="feed-name">'+ name +'</div><div class="feed-time">'+time+'</div></div>');
		html.push('</div>');
		html.push(imgHtml);
		title&& html.push('<div class="feed-art"><div class="feed-title">'+ title +'</div><aside>'+ contentDesc +'</aside></div>');
		content && html.push('<div class="fees-desc">'+ (reNickName?'回复'+reNickName+'：':'') +content +'</div>');
		typeof comCount === 'number' && html.push('<div class="feed-bar"><div class="feed-bar-item">回复（'+ comCount +'）</div></div>');
		typeof canRe === 'number' &&  html.push('<div class="fix feed-com">'+
				(!canRe?'<div class="article-btn" data-toggle="commentArticle" data-type="'+extVars.type+'" data-id='+extVars.parentId+' data-reid="'+author+'" data-type="art">回复</div>':'')+
				'</div>');
		html.push('</div>');
			 
	}
	return html.join('');
} 
 
BuildFeeds.prototype.buildImgs = function (data) {
	if(!data || !data.length) return '';
	var length = data.length,  original = 'original', type = 'small', className = 'large'; 
	if(length > 1 && length <5){ type = 'tiny'; className = 'small' } 
	else if(length > 4){ type = 'tiny'; className = 'tiny'};
	
	var html = []; 
	html.push('<ul class="fix feed-photos '+ className +'" >');
	
	for(var i = 0; i < length; i ++){
		var img = data[i], url = img.path , originalUrl = img.path, imgType = img.width > img.height ? 'wtype': 'htype'; 
		html.push('<li oUrl='+ originalUrl +'><div class="feed-frame">&nbsp;<img  class="'+ imgType +'" xsrc="'+ url +'" />&nbsp;</div></li>')
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
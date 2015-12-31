var $ = require('zepto');
var listStore = require('store/listStore');

var buildEssay = function(data){
	var html = [];
	for(var i = 0,length = data.length; i < length; i ++){
		var item = data[i], title = item.title, author = item.author, url = item.url, time = item.time;
		html.push('<div class="essay-item" data-url="'+url+'" data-time="'+time+'" data-author="'+ author +'" data-title="'+ title +'"><h2>'+ title +'</h2><aside>by '+ author +' '+ time +'</aside></div>')
	}
	return html.join('');
}

var buildVideo = function (data) {
	var html = [];
	for(var i = 0,length = data.length; i < length; i ++){
		var item = data[i], title = item.title, author = item.author, url = item.url, time = item.time;
		html.push('<div class="video-item"><h2>'+ title +'</h2>');
		html.push('<video width="620" controls autobuffer>');
		html.push('<source src="'+ url +'" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\'></source>');
		html.push('</video>');
		html.push('<aside>by '+ author +' '+ time +'</aside></div>');
	}
	return html.join('');
}

var storeComponent = {
	buildList1:function($view, pageManager) {
		listStore.getList1(function(data){
			var list = data.list;
			$view.append(buildEssay(list));
		})
		
		$view.on('click','.essay-item',function(e){
			var $this = $(this), data = $this.data();
			pageManager.next('article1',data);
		})
	},
	buildList2:function($view, pageManager) {
		listStore.getList2(function(data){
			var list = data.list;
			$view.append(buildEssay(list));
		})
		
		$view.on('click','.essay-item',function(e){
			var $this = $(this), data = $this.data();
			pageManager.next('article2',data);
		})
	},
	buildList3:function($view, pageManager) { 
		listStore.getList3(function(data){ 
			var list = data.list;
			$view.append(buildVideo(list));
		});
	}
}

module.exports = storeComponent; 
var $ = require('zepto');
var $ = require('zepto');
var essayStore = require('store/essayStore');
var ajax = require('tool/ajax');



var storeComponent = {
	buildEssay: function($view,data){
		var title = data.title, time = data.time, author = data.author, url = data.url;
		$view.find('.head-title').html(title);
		console.log(url);
		essayStore.getEssay(url, function(data){ 
			var html = [];
			html.push('<div class="essay-head"><h2>'+ title +'</h2><aside>by '+ author +' '+ time +'</aside></div>');	
			html.push('<div class="essay-content">')
			for(var i = 0, length = data.length; i< length; i ++){
				html.push('<p>'+data[i]+'</p>')
			}
			html.push('</div>')
			$view.find('.article-box').html(html.join(''))
		});
		
		
		
		
	}
}

module.exports = storeComponent; 
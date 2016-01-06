var $ = require('zepto');



var paging = {
	buildScroll: function (module, $item, callback) {	
		
		callback();
		$(window).on('scroll.'+module, function () { 
			if($item.data('isLoading')) return;
			if(Math.abs($(window).scrollTop() - $(document).height() + $(window).height()) < 200){
				var page = $item.data('page');
				
				if(~page){
					$item.data('isLoading', true).trigger('loadingPaging');
					callback(page, function (flag){
						if(flag){
							$item.data('isLoading', false).trigger('loadedPaging');
						}else{
							$item.trigger('endPaging');
							paging.clearScroll(module);
						}
					});
				}else{
					$item.trigger('endPaging');
					paging.clearScroll(module);
				}
			} 
		})
	} ,
	clearScroll: function (module) {
		$(window).off('scroll.'+module);
	}
} 

module.exports = paging; 
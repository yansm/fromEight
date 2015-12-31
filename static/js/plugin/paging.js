var $ = require('zepto');



var paging = {
	buildScroll: function (module, $item, callback) {	
		
		callback(1);
		 $item.data('page', 1);
		$(window).on('scroll.'+module, function () { 
			if($item.data('isLoading')) return;
			if(Math.abs($(window).scrollTop() - $(document).height() + $(window).height()) < 200){
				var page = $item.data('page'), count = $item.data('count');
				if(page < count){
					$item.data('page', ++page).data('isLoading', true).trigger('loadingPaging');
					callback(page, function (flag){
						if(!flag){
							$item.data('page', --page);
						}
						$item.data('isLoading', false).trigger('loadedPaging');
					});
				}else if(count){
					$item.trigger('endPaging');
				}
			} 
		})
	} ,
	clearScroll: function (module) {
		$(window).off('scroll.'+module);
	}
} 

module.exports = paging; 
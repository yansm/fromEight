var $ = require('zepto');
var Swiper = require('plugin/swiper');

var swiper;

 
var buildList = function ($list) {
	var html = [];
	$list.each(function (i, item) {
		var $item = $(item), url = $item.attr('ourl');
		html.push('<div class="swiper-slide"><img data-src="'+ url +'" class="swiper-lazy"></div>');
	});
	return html.join('');
}

var baguetteBox = function () { 
	var $container;
	if($('#swiperContainer').length){
		$container = $('#swiperContainer');
	}else{
		$container = $('<div class="swiper-container" id="swiperContainer"><div class="swiper-wrapper"></div><div class="swiper-pagination swiper-pagination-white"></div></div>');
		$container.appendTo('body')
	}
	
	var $doc = $(document);
	
	$doc.off('click','.feed-photos').on('click','.feed-photos li', function () {
		var $this = $(this), $list = $this.parent().children(), index = $this.index();
		$container.find('.swiper-wrapper').html(buildList($list));
		
		$container.show();
		setTimeout(function(){
			$container.addClass('current');
			swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: false,
				// Disable preloading of all images
				preloadImages: false, 
				initialSlide: index,
				// Enable lazy loading
				lazyLoading: true,
				touchMoveStopPropagation: true
			});
			
		} ,0)
		
	})
	$container.on('click',function (e) {
		e.stopPropagation();
		$container.removeClass('current');
		setTimeout(function () {
			$container.hide();
			swiper.destroy(false);
			swiper.removeAllSlides();
		}, 300);
	}).on('touchmove', function(e) {
		e.preventDefault();
	})
}

module.exports = baguetteBox;
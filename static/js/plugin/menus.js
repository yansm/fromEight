var $ = require('zepto');

var $menu = $('#menu');

var menusManager = {
	setMenu: function (flag, module) {
		if(flag==='auto') return;
		if(flag) $menu.addClass('hide');
		else{
			$menu.removeClass('hide');
			if(module)	$menu.find('[data-target="'+ module +'"]').addClass('current').siblings().removeClass('current');
		}
	},
	getMethod: function (flag, module){
		var $current = $menu.find('.current');  
		if(!$current.length){
			return 'prev';
		}else{
			return $current.index()<flag ? 'next' : 'prev';
		}
	},
	showSubMenu: function ($item) {
		$item.toggleClass('active');
	}
}

$(function () {
	$('[data-toggle="menuSub"]').on('click', function (e) {
		var $this = $(this);
		if(this===e.target){
			menusManager.showSubMenu($this);
		}
	});
	
	$(document).on('click', function (e) {
		//console.log($(e.target).data('toggle'));
		if($(e.target).data('toggle')!=='menuSub'){
			$('[data-toggle="menuSub"]').removeClass('active');
		}
	});
});
 

module.exports = menusManager;
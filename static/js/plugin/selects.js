var $ = require('zepto');


var Selects = function (ele, opts) {
	this.ele = $(ele);
	this.opts = opts;
	this.box = this.opts.box;
	this.init();
}

Selects.prototype.init = function () {
	var me = this;
	this.ele.on('click','[data-toggle="select"]',function () {
		me.box.show();
		setTimeout(function(){
			me.box.addClass('current');
		},0)
	});
	this.box.on('click',function () {
		me.hide();
	})
	this.box.find('.shoptype-item').on('click', function (e) {
		var $item = $(this), id = $item.data('id'), name = $item.data('name');
		$item.addClass('active').siblings().removeClass('active');
		me.ele.find('[data-toggle="select"]').html(name);
		me.ele.find('input').val(id);
		me.hide();
		e.stopPropagation();
	});
	
}

Selects.prototype.hide = function () {
	var me = this;
	
	this.box.removeClass('current');
	setTimeout(function(){
		me.box.hide();
	}, 430)
		
}

Selects.prototype.remove = function () {
	this.box.remove();
}

Selects.DEFAULTS = {};



module.exports =  function ($item,option) {   
	$item.each(function (item) {   
		var $this = $(this)
			,data    = $this.data('teemoSelects')
			,options = $.extend({}, Selects.DEFAULTS, typeof option == 'object' && option);
		
		if (!data) $this.data('teemoSelects', (data = new Selects(this, options)));
		if (typeof option == 'string') data[option]();
	});
};  
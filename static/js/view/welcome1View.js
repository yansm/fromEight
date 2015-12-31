var $ = require('zepto');

var tpl = 
		'<section class="welcome1-area" id="welcome1-area">'
			+'<div class="container no-padding">'
				+'<div class="w1"></div>'
				+'<div class="w2"></div>'
				+'<div class="next" data-toggle="next" data-target="welcome2"></div>'
			+'</div>'
		+'</section>'
		 
var hiddenEvent;

var showEvent;

var buildPage = function ($view, callback) {
	setTimeout(function() {
		$view.find('.container').addClass('in');
	},100)
	callback && callback();
};

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true
}    
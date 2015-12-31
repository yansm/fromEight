var $ = require('zepto');


var tpl = 
	'<header class="main-head" id="main-head"></header>'
		+'<section class="main-area" id="main-area">'
			+'<div class="container no-padding">'
				+'<div class="main-item main-item1" data-toggle="next" data-target="list1"><i></i><div class="main-item-body">最原汁原味的班级故事</div></div>'
				+'<div class="main-item main-item2" data-toggle="next" data-target="list2"><i></i><div class="main-item-body">故事里的事，说是就是不是也是</div></div>'
				+'<div class="main-item main-item3" data-toggle="next" data-target="list3"><i></i><div class="main-item-body">没一匹马，上中下三集</div></div>'
			+'</div>'
		+'</section>'
		
var hiddenEvent;

var showEvent;

var buildPage = function($view, callback) {
	var pageManager = this;
	
	callback && callback();
} 

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true
}
 
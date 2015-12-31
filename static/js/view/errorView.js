var $ = require('zepto');

var tpl = 
	''
		+'<div class="error-area" id="error-area">'
			+'<div class="error-box">'
				+'<div class="error-content" data-target="errorMsg"></div>'
				+'<div class="btn error-btn cal" data-toggle="errorSub" data-cancle="true">取消</div>'
				+'<div class="btn error-btn" data-toggle="errorSub">确定</div>'
			+'</div>'
		+'</div>'
		
var hiddenEvent = function (view) {
	var $err = view.content;
	$err.remove();
	delete this.moduleList['error'];
	if(errorList.length){
		var data = errorList[0], submitFn = data.submitFn, msg = data.msg, isConfirm = data.isConfirm;
		errorList.shift();
		this.showErr(msg,submitFn,isConfirm);
	}
}; 

var showEvent = function (view) {
	var $err = view.content; 
	$err.show(); 
	setTimeout(function () {
		$err.addClass('current');
	},0);
};
 
var buildPage = function($view, callback, config) {
	var pageManager = this; 
	$view.find('[data-target="errorMsg"]').html(config.msg);
	if(config.submitFn){
		$view.find('[data-toggle="errorSub"]').one('click', function () {
			config.submitFn(!$(this).data('cancle'));
		});
	}
	if(config.isConfirm){
		$view.addClass('confirm');
	}
	callback && callback();
} 

var errorList = [];

module.exports = {
	tpl: tpl,
	hiddenEvent: hiddenEvent,
	showEvent: showEvent, 
	buildPage: buildPage,
	needReload: true,
	hideMenu: 'auto',
	errorList: errorList
} 	
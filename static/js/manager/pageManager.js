var $ = require('zepto'); 
var pageContainer = require('view/viewContainer');

var menus = require('plugin/menus');

var ModuleManager = function () {
	
}

ModuleManager.OPTIONS = {
	time: 500
}
ModuleManager.prototype.getTime = function () { 
	return ModuleManager.OPTIONS.time;
}

/*
*初始化
*/
ModuleManager.prototype.init = function (ele, module,flag) {
	this.ele = ele;
	this.current = module || 'main';
	this.flag = this.showFlag = false;
	this.moduleList = {};
	var me = this
		,page = this.current;
	
	me.closeLoading(flag,function(){
		me.buildPage(page, function (fail) {
			
			var view = me.getView(page);
			view.header.css({'display':'block'});
			view.content.css({'display':'table'});
			
			
		});
	})
	
}
/**
 * [closeLoading 关闭loading页面]
 * yansanmu 
 * @DateTime 2016-01-01T19:13:03+0800
 * @param    {[type]}                 flag     [description]
 * @param    {Function}               callback [description]
 * @return   {[type]}                          [description]
 */
ModuleManager.prototype.closeLoading = function (flag,callback) {
	var $loading = this.ele.find('#loading')
	setTimeout(function () {
		$loading.addClass('out');
		callback&&callback();
		setTimeout(function () {
			$loading.hide();
			
		}, 1200);
	},flag?6000:0);
	if(flag)
	setTimeout(function () {
		$loading.addClass('in');
		
	},0)
	
	
	
}

/**
 * [buildPage 构造页面]
 * yansanmu 
 * @DateTime 2016-01-01T19:13:26+0800
 * @param    {[type]}                 page     [description]
 * @param    {Function}               callback [description]
 * @param    {[type]}                 config   [description]
 * @return   {[type]}                          [description]
 */
ModuleManager.prototype.buildPage = function (page, callback, config) {
	var pageList = pageContainer.get(page), tpl, $page;
	
	if(!this.moduleList[page]) {
		this.moduleList[page] = true;
		tpl = pageList.tpl;
		$page = $(tpl).appendTo(this.ele);
		pageList.buildPage ? pageList.buildPage.call(this, $page, callback, config, this.getView(page) ) : callback&&callback();
	}else{
		callback&& callback();
	}
	
	
}


/**
 * [getView 获取页面jq节点]
 * yansanmu 
 * @DateTime 2016-01-01T19:13:38+0800
 * @param    {[type]}                 page [description]
 * @return   {[type]}                      [description]
 */
ModuleManager.prototype.getView = function (page) {
	return {
		header: $('#'+page+'-head'),
		content: $('#'+page+'-area')
	}
}

/**
 * [show 触发页面show event]
 * yansanmu 
 * @DateTime 2016-01-01T19:14:08+0800
 * @param    {[type]}                 _page [description]
 * @return   {[type]}                       [description]
 */
ModuleManager.prototype.show = function (_page) { 
	var page = _page || this.current,view = this.getView(page)
		,$header = view.header, $content = view.content
		,me = this;
	var pageList = pageContainer.get(page);
	pageList.showEvent && pageList.showEvent.call(this,view);
	
	
	
}
/**
 * [next 右侧切入]
 * yansanmu 
 * @DateTime 2016-01-01T19:14:43+0800
 * @param    {[type]}                 target [description]
 * @param    {[type]}                 config [description]
 * @return   {Function}                      [description]
 */
ModuleManager.prototype.next = function (target,config) {
	if(target === this.current || !pageContainer.get(target)) return; 
	if(this.checkClick()) return; 
	this.lastCurrent = this.current;
	this.current = target;
	this.showFlag = false;

	var me = this;
	me.buildPage(me.current, function () { 
		if(me.showFlag) me.show(target);
		else me.showFlag = true;
	}, config);	
	
	var lastView = this.getView(this.lastCurrent)
		,view = this.getView(this.current) 
		,$lastHeader = lastView.header, $lastContent = lastView.content
		,$header = view.header, $content = view.content
		,$body = $('body');
		
	
	
	$lastHeader.css({
		'z-index': '2'
	});
	$lastContent.css({
		'position': 'absolute',
		'top': '0',
		'left': '0',
		'z-index': '1'
	});
	$header.css({
		'-webkit-transform':'translate(100%,0)',
		'transform':'translate(100%,0)',
		'z-index': '9',
		'display':'block'
	})
	$content.css({
		'position': 'fixed', 
		'top': '0',
		'left': '0',
		'z-index': '8',
		'display':'table'
	}).find('.container').css({
		'-webkit-transform':'translate(100%,0)',
		'transform':'translate(100%,0)' ,
	})
	
	$body.css('overflow', 'hidden');
	
	setTimeout(function(){
		$lastHeader.css({
			'-webkit-transform':'translate(-33%,0)',
			'transform':'translate(-33%,0)'
		});
		$lastContent.find('.container').css({
			'-webkit-transform':'translate(-33%,0)',
			'transform':'translate(-33%,0)'
		});
		$header.css({
			'-webkit-transform':'translate(0,0)',
			'transform':'translate(0,0)',
		});
		$content.find('.container').css({
			'-webkit-transform':'translate(0,0)',
			'transform':'translate(0,0)'
		});
		
		me.setTimeout();
		
	}, 50)
}
/**
 * [prev 右侧切出]
 * yansanmu 
 * @DateTime 2016-01-01T19:15:15+0800
 * @param    {[type]}                 target [description]
 * @param    {[type]}                 config [description]
 * @return   {[type]}                        [description]
 */
ModuleManager.prototype.prev = function (target, config) { 
	
	if(target === this.current || !pageContainer.get(target)) return; 
	if(this.checkClick()) return; 
	this.lastCurrent = this.current;
	this.current = target;
	this.showFlag = false;
		
	var me = this;
	me.buildPage(me.current, function () {
		if(me.showFlag) me.show();
		else me.showFlag = true;
	}, config);	
	
	var lastView = this.getView(this.lastCurrent)
		,view = this.getView(this.current) 
		,$lastHeader = lastView.header, $lastContent = lastView.content
		,$header = view.header, $content = view.content
		,$body = $('body');
	
	$lastHeader.css({
		'z-index': '9'
	});
	$lastContent.css({
		'position': 'absolute',
		'top': '0',
		'left': '0',
		'z-index': '8'
	});
	$header.css({
		'-webkit-transform':'translate(-33%,0)',
		'transform':'translate(-33%,0)',
		'z-index': '2',
		'display':'block'
	});
	$content.css({
		'position': 'fixed',
		'top': '0', 
		'left': '0',
		'z-index': '1',
		'display':'table'
	}).find('.container').css({
		'-webkit-transform':'translate(-33%,0)',
		'transform':'translate(-33%,0)',
	})
	
	$body.css('overflow', 'hidden');
	
	setTimeout(function(){
		$lastHeader.css({
			'-webkit-transform':'translate(100%,0)',
			'transform':'translate(100%,0)'
		});
		$lastContent.find('.container').css({
			'-webkit-transform':'translate(100%,0)',
			'transform':'translate(100%,0)' 
		});
		$header.css({
			'-webkit-transform':'translate(0,0)',
			'transform':'translate(0,0)'
		});
		$content.find('.container').css({
			'-webkit-transform':'translate(0,0)',
			'transform':'translate(0,0)'
		});
		 
		me.setTimeout();
		
	}, 50)
}
/**
 * [checkClick 检测是否还在动画中]
 * yansanmu 
 * @DateTime 2016-01-01T19:15:33+0800
 * @return   {[type]}                 [description]
 */
ModuleManager.prototype.checkClick = function () {
	if(this.flag) return true;
	else{
		this.flag = true;
		return false;
	}
}
/**
 * [setTimeout 触发hide时间并最后整理]
 * yansanmu 
 * @DateTime 2016-01-01T19:15:48+0800
 */
ModuleManager.prototype.setTimeout = function () {
	var me = this
		,lastView = this.getView(this.lastCurrent)
		,view = this.getView(this.current) 
		,$lastHeader = lastView.header, $lastContent = lastView.content
		,$header = view.header, $content = view.content
		,$body = $('body');
		
	if(this.timeout) clearTimeout(this.timeout);
		
	me.timeout = setTimeout(function () {
		setTimeout(function () {
			 
			$lastHeader.css({'display':'none'});
			$lastContent.css({'display':'none'}).find('.container').css({
				'-webkit-transform':'translate(0,0)',
				'transform':'translate(0,0)'
			});
			//如果需要重载则删除节点
			if(!!pageList.needReload){
				$lastHeader.remove();
				$lastContent.remove();
				delete me.moduleList[me.lastCurrent];
			}
			$body.css({
					'overflow-y': 'visible',
					'overflow-x': 'hiddex'
				});	
			$content.css({	
				'position': 'relative',
			});
			$body.scrollTop(0);
			me.flag = false;
		}, 100)
		
	
		
		var pageList = pageContainer.get(me.lastCurrent);
		pageList.hiddenEvent && pageList.hiddenEvent.call(me,lastView);
		
		
		if(me.showFlag) me.show();
		else me.showFlag = true;
		
	}, me.getTime()) 
	
}

/**
 * [showErr 打开弹窗]
 * yansanmu 
 * @DateTime 2016-01-01T19:16:19+0800
 * @param    {[type]}                 msg       [description]
 * @param    {[type]}                 submitFn  [description]
 * @param    {Boolean}                isConfirm [description]
 * @return   {[type]}                           [description]
 */
ModuleManager.prototype.showErr = function (msg,submitFn, isConfirm ) { 
	var view = this.getView(this.current), me = this;
	var data = {msg: msg, submitFn: submitFn, isConfirm: !!isConfirm};
	//如果当前存在一打开的alert框
	if(this.moduleList['error']){
		var pageList = pageContainer.get('error');
		pageList.errorList.push(data);
		return;
	}
	view.header.addClass('blur');
	view.content.addClass('blur');
	this.buildPage('error', function () {
		me.show('error');
	}, data) 
}
/**
 * [hideErr 关闭弹窗]
 * yansanmu 
 * @DateTime 2016-01-01T19:16:31+0800
 * @return   {[type]}                 [description]
 */
ModuleManager.prototype.hideErr = function () {
	var view = this.getView(this.current), me = this;
	this.ele.find('.blur').removeClass('blur');
	var errorView = this.getView('error');
	errorView.content.removeClass('current');
	setTimeout(function () {
		var pageList = pageContainer.get('error');
		pageList.hiddenEvent && pageList.hiddenEvent.call(me,errorView);
	}, 500);
	
} 

/**
 * [buildMenu 创建个人菜单]
 * yansanmu 
 * @DateTime 2016-01-01T19:20:35+0800
 * @param    {[type]}                 data [description]
 * @return   {[type]}                      [description]
 */
ModuleManager.prototype.buildMenu = function(data) {
	// body...
	menus.buildMenu(data);
};

ModuleManager.prototype.showMenu = function () {
	if(this.checkClick()) return; 
	var me = this;
	menus.showMenu(function() {
		me.flag = false;
	});
}

ModuleManager.prototype.hideMenu = function () {
	if(this.checkClick()) return;
	var me = this;
	menus.hideMenu(function () {
		me.flag = false;
	});
}

var moduleManager = new ModuleManager();
 
 $(document).on('click','[data-toggle=errorSub]', function () {
	moduleManager.hideErr();
 }).on('click','[data-toggle="showMenu"]',function(){
 	moduleManager.showMenu();
 }).on('click','[data-toggle="hideMenu"]',function(){
 	moduleManager.hideMenu();
 });
 
module.exports = moduleManager;



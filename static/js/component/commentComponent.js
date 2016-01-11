var $ = require('zepto');

var commentStore = require('store/commentStore');


var format = require('tool/format');

var storeComponent = {
	/**
	 * [buildAddForm description]
	 * yansanmu 
	 * @DateTime 2016-01-11T23:47:11+0800
	 * @param    {[type]}                 $item    [description]
	 * @param    {[type]}                 pManager [description]
	 * @param    {[type]}                 config   [description]
	 * @return   {[type]}                          [description]
	 */
	buildAddForm: function($item, pManager,config){
		//console.log(config);
		$item.find('[name="parentId"]').val(config.id||'');
		$item.find('[name="type"]').val(config.type||'');
		$item.find('[name="reId"]').val(config.reid||''); 

		$item.formValidate(); 
		var $submit = $item.find('[data-toggle=submit]');
		$item.on('click', '[data-toggle="submit"]', function () {
			$item.formValidate('checkForm', function (flag){  
				if(!flag) return;
				$item.formValidate('submit', function (data) { 
					//alert(JSON.stringify(data));
					commentStore.addCom(data, function (e) {
						if(e.code){
							pManager.showErr(e.msg||'发布失败');
							$item.formValidate('resetSubmit'); 
						}else{
							$item.find('[name="content"]').val('');
							pManager.prev(config.type==='art'?'detailart':'',{id:config.id});
						}
					});
				});
			})
		}).on('bsFormValid', function (e, flags) {
			if(flags.content) $submit.addClass('able');
			else $submit.removeClass('able');
		}) 
	}, 
	
	
}

module.exports = storeComponent;  
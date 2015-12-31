var $ = require('zepto');
var $ = require('zepto');
var userStore = require('store/userStore');
var ajax = require('tool/ajax');



var storeComponent = {
	buildStuForm: function ($item, pManager) {
		$item.formValidate(); 
		
		$item.on('click', '[data-toggle="submit"]', function () {
			$item.formValidate('checkForm', function (flag){  
				if(!flag) return;
				$item.formValidate('submit', function (data) { 
					userStore.addStu(data, function (e) {
						//alert(JSON.stringify(e));
						if(e.code === 0){
							pManager.next('reguser', e.data);
						}else{
							pManager.showErr(e.msg || '注册用户失败！');
							$item.formValidate('resetSubmit');
						}
					}); 
					
				});
			})
		}) 
	},
	buildUserForm: function ($item, pManager){
		$item.formValidate(); 
		
		$item.on('click', '[data-toggle="submit"]', function () {
			$item.formValidate('checkForm', function (flag){  
				if(!flag) return;
				$item.formValidate('submit', function (data) { 
					userStore.addUser(data, function (e) {
						alert(JSON.stringify(e));
						if(e.code === 0){
							pManager.next('main');
						}else{
							pManager.showErr(e.msg || '注册用户失败！');
							$item.formValidate('resetSubmit');
						}
					}); 
					
				});
			})
		}) 
	},
	resetForm: function ($item) {
		$item.formValidate('resetSubmit');
	},
}

module.exports = storeComponent; 
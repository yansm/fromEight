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
						//alert(JSON.stringify(e));
						if(e.code === 0){
							
							pManager.next('main');
							pManager.buildMenu(e.data);
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
	newUserList: function($item) {
		userStore.list({startNum:0, endNum:8}, function (e) {
			var html =  [];
			if(e.code === 0){
				var list = e.data;
				for(var i = 0, length = list.length; i < length; i ++) {
					var item = list[i], 
						userName = item.userName, 
						nickName = item.nickName,
						userHead = item.userHead,
						stuNum = item.stuNum,
						name = nickName?(nickName+'('+ userName +')'): userName;
					html.push('<div class="main-useritem"><img src="'+ userHead +'"><aside class="ell">'+ name +'</aside></div>');
				}	
				$item.append(html.join(''));
			}
			
		});
	}
}

module.exports = storeComponent; 
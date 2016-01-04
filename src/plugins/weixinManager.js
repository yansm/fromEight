var weixinService = reqlib('src/services/weixinService');

var manager = {
	setGobalConfigs : function(){
		weixinService.getAccessToken(function(res){
			if(res){
				global.myConfig.accessToken = res.access_token;
				weixinService.getTicket(global.myConfig.accessToken, function (res2) {
					global.myConfig.ticket = res2.ticket;
					console.log('换取ticket成功');
					setTimeout(function(){
						manager.setGobalConfigs();
					}, 3600000)
				});
			}
		});
	}
}

module.exports = manager;
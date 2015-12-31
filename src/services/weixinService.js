

var https = require('https');
var weixinConfig = reqlib('config/weixin-config');

var getJson = reqlib('src/plugins/getjson');

var service = {
	/**
	 * [getTokenByCode 根据code获取token]
	 * @yansanmu github.com/yansm
	 * @DateTime  2015-12-29T18:53:02+0800
	 * @param     {[string]}                 code     [description]
	 * @param     {Function}               callback [description]
	 */
	getTokenByCode : function (code,callback) {
		var url = '/sns/oauth2/access_token?appid='+ weixinConfig.APPID
			 +'&secret='+ weixinConfig.APPSECRET +'&code='+ code +'&grant_type=authorization_code';
		var options = {
			host: weixinConfig.HOST,
		    path: url,
		}
		getJson(options, function(status,res){
			if(status===200){
				var access_token = res.access_token,
					openid = res.openid;
				service.getUserByToken(access_token,openid, callback);
			}else{
				callback && callback(false)
			}
		});
	},
	/**
	 * [getUserByToken 根据token获取用户信息]
	 * @yansanmu github.com/yansm
	 * @DateTime  2015-12-29T18:58:19+0800
	 * @param     {[string]}                 token    [description]
	 * @param     {[string]}                 openId   [description]
	 * @param     {Function}               callback [description]
	 */
	getUserByToken : function(token,openId, callback){
		var url = '/sns/userinfo?access_token='+ token +'&openid='+ openId;
		var options = {
			host: weixinConfig.HOST,
		    path: url,
		}
		getJson(options, function(status, res){
			if(status===200){
				callback && callback(res);
			}else{
				callback && callback(false)
			}
		});
	} 
}

module.exports = service;
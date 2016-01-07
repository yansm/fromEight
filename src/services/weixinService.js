var https = require('https');
var weixinConfig = reqlib('config/weixin-config');

var http = require("http");
var fs = require("fs");

var sizeOf = require('image-size');

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
	},
	/**
	 * [getAccessToken getAccessToken]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-04T20:03:30+0800
	 * @param     {Function}               callback [description]
	 */
	getAccessToken : function (callback) {
		var url = '/cgi-bin/token?grant_type=client_credential&appid='+ weixinConfig.APPID +'&secret=' + weixinConfig.APPSECRET;
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
	},
	/**
	 * [getTicket 获取ticket]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-04T20:16:58+0800
	 * @param    {[type]}                 accessToken [description]
	 * @param    {Function}               callback    [description]
	 * @return   {[type]}                             [description]
	 */
	getTicket : function (accessToken, callback) {
		var url = '/cgi-bin/ticket/getticket?access_token='+ accessToken +'&type=jsapi';
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
	},
	/**
	 * [getMedia 获取附件]
	 * yansanmu 
	 * @DateTime 2016-01-06T23:07:01+0800
	 * @param    {[type]}                 accessToken [description]
	 * @param    {[type]}                 mediaId     [description]
	 * @param    {Function}               callback    [description]
	 * @return   {[type]}                             [description]
	 */
	getMedia : function (accessToken,mediaId,callback) {
		var url = '/cgi-bin/media/get?access_token='+ accessToken +'&media_id=' + mediaId;
		
		http.get(weixinConfig.MEDIAHOST + url , function(res) {
		    var size = 0;
		    var chunks = [];
		    var fileName = res.headers['content-disposition'].match(/filename="(.+)"/)[1];
		  res.on('data', function(chunk){
		      size += chunk.length;
		      chunks.push(chunk);
		  });
		  res.on('end', function(){
		        var data = Buffer.concat(chunks, size);
		        var dimensions = sizeOf(data);
		        var pathName = '/media/'+fileName;
		        fs.writeFile('public'+pathName, data, function (err) {
				    if (err) {
				    	console.log('Error '+ err.message);
				    	callback && callback(false);
				    }else{
				    	callback && callback({
				    		path: pathName,
				    		width: dimensions.width,
				    		height: dimensions.height
				    	});
				    	console.log('File '+ fileName +' Saved !'); //文件被保存
				    }
				    
			    }) ;
		        
		  });
		}).on('error', function(e) {
			callback && callback(false);
		    console.log("Got error: " + e.message);
		});
	}
}

module.exports = service;
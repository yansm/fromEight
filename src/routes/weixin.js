var express = require('express');
var router = express.Router();
//config
var weixinConfig = reqlib('config/weixin-config');
var errConfig = reqlib('config/errcode-config');
var weixinService = reqlib('src/services/weixinService');
var userService = reqlib('src/services/userService');

var objectAssign = require('object-assign');
var sha1 = reqlib('src/plugins/sha1');

/* GET home page. */
router.get('/', function(req, res, next) {
	//判断cookie是否存在
	if(req.cookies['open_id']){ 
		console.log('有coookie') 
		res.render('index', { title: '0908' });
	}else{
		var code = req.query.code;
		weixinService.getTokenByCode(code,function(wRes){
			if(wRes && wRes.openid){
				var openId = wRes.openid;
				res.cookie('open_id', openId, { httpOnly: true});
				res.cookie('user_head', wRes.headimgurl||'', { httpOnly: false});
				res.render('index', { title: '0908' });
			}else{
				res.render('index', { title: '0908' });
			}
		})
		
	}
	
});

router.post('/ticket', function(req, res, next) {
	var url = req.body.url.split('#')[0],
		ticket = global.myConfig.ticket,
		nonceStr = weixinConfig.NONCESTR,
		appId = weixinConfig.APPID,
		timestamp = parseInt(new Date().getTime()/1000),
		vars = ['jsapi_ticket='+ ticket, 'noncestr=' + nonceStr, 'timestamp=' + timestamp,'url=' + url ].sort(),
		string1 = vars.join('&'),
		signature = sha1.hex_sha1(string1);
	res.json(objectAssign({},errConfig[0], {
		data:{
			signature: signature,
			appId: appId,
			timestamp: timestamp,
			nonceStr: nonceStr
		}
	}));
});

module.exports = router;
	
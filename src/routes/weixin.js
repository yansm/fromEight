var express = require('express');
var router = express.Router();
//config
var weixinConfig = reqlib('config/weixin-config');

var weixinService = reqlib('src/services/weixinService');
var userService = reqlib('src/services/userService');


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

module.exports = router;
	
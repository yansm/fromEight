var express = require('express');
var router = express.Router();
var userService = reqlib('src/services/userService');

var usersConfig = reqlib('config/users-config');

var errConfig = reqlib('config/errcode-config');

var objectAssign = require('object-assign');

/* GET users listing. */
router.get('/info', function(req, res, next) {
	var openId = req.cookies['open_id'];
	if(!openId) {
		res.json({code:-1});
		return;
	}
	userService.queryByOpenId({openId: openId}, function (uRes) {
		res.json(uRes);
	});
});

router.post('/check',function(req, res, next){
	var stuNum = req.body.stuNum;
	if(!usersConfig[stuNum]){
		res.json(errConfig[2001]);
	}else {
		userService.checkUser({stuNum: stuNum}, function (uRes) {
			if(!uRes.code){
				//该用户可以继续注册
				if(!uRes.data){
					//合并用户数据
					var stuData = objectAssign({},usersConfig[stuNum], {stuNum: stuNum});
					res.json(objectAssign({},errConfig[0], {
						data: stuData
					}));
				}
				//该用户已经被注册
				else{
					res.json(errConfig[2002]);
				}
			}else{
				//数据库错误
				res.json(uRes);
			}
		});
	}
})
/**
 * [添加用户]
 * @yansanmu github.com/yansm
 * @DateTime 2015-12-30T21:26:58+0800
 * @param    {[type]}                 req         [description]
 * @param    {[type]}                 res         [description]
 * @param    {[type]}                 next){	var data          [description]
 * @return   {[type]}                             [description]
 */
router.post('/add',function(req, res, next){
	var data = req.body;
	var openId = req.cookies['open_id'];
	var userHead = req.cookies['user_head']; 
	var createTime = new Date().getTime();
	data = objectAssign({}, data, {openId: openId, userHead: userHead, createTime: createTime});
	userService.add(data,function (uRes) {
		res.json(uRes);
	});
});
/**
 * [用户列表]
 * yansanmu 
 * @DateTime 2016-01-04T00:27:25+0800
 * @param    {[type]}                 req       [description]
 * @param    {[type]}                 res       [description]
 * @param    {[type]}                 next){} [description]
 * @return   {[type]}                           [description]
 */
router.post('/list', function(req, res, next){
	var data = req.body;
	userService.list(data, function (uRes){
		res.json(uRes);
	})
});

module.exports = router;
	
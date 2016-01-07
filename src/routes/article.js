var express = require('express');
var router = express.Router();
var articleService = reqlib('src/services/articleService');

var usersConfig = reqlib('config/users-config');

var errConfig = reqlib('config/errcode-config');

var objectAssign = require('object-assign');

/**
 * [description]
 * @yansanmu github.com/yansm
 * @DateTime 2016-01-07T16:01:27+0800
 */
router.post('/add',function(req, res, next){
	var data = req.body;
	var openId = req.cookies['open_id'];
	var createTime = new Date().getTime();

	if(!openId){
		res.json( objectAssign({}, errConfig[9000]) );
		return;
	}

	data = objectAssign({}, data, {author: openId, createTime: createTime, status: 1});
	articleService.add(data,function (uRes) {
		res.json(uRes);
	});
});

/**
 * [description]
 * @yansanmu github.com/yansm
 * @DateTime 2016-01-07T17:21:21+0800		
 */
router.post('/list',function(req, res, next){
	var data = req.body;
	var openId = req.cookies['open_id'];
	data = objectAssign({}, data, {openId: openId});
	articleService.list(data,function (uRes) {
		res.json(uRes);
	});
});

/**
 * [description]
 * @yansanmu github.com/yansm
 * @DateTime 2016-01-07T19:53:23+0800
 */
router.post('/queryById',function(req, res, next){
	var data = req.body;
	var openId = req.cookies['open_id'];
	data = objectAssign({}, data, {openId: openId});
	articleService.queryById(data,function (uRes) {
		res.json(uRes);
	});
});


module.exports = router;
	
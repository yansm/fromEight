var express = require('express');
var router = express.Router();
var messageService = reqlib('src/services/messageService');

var usersConfig = reqlib('config/users-config');

var errConfig = reqlib('config/errcode-config');

var objectAssign = require('object-assign');

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
	var createTime = new Date().getTime();

	if(!openId){
		res.json( objectAssign({}, errConfig[9000]) );
		return;
	}

	data = objectAssign({}, data, {author: openId, createTime: createTime, status: 1});
	messageService.add(data,function (uRes) {
		res.json(uRes);
	});
});


module.exports = router;
	
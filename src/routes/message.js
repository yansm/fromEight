var express = require('express');
var router = express.Router();
var messageService = reqlib('src/services/messageService');
var weixinService = reqlib('src/services/weixinService');

var usersConfig = reqlib('config/users-config');

var errConfig = reqlib('config/errcode-config');

var objectAssign = require('object-assign');

/**
 * [添加messages]
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
	if(data.images){
		var images = data.images.split(','), length = images.length, paths = [], flags = [];
		for(var i = 0; i < length; i ++) {
			var mediaId = images[i];
			weixinService.getMedia(global.myConfig.accessToken, mediaId, function(path){
				if(path){
					paths.push(path);
				}
				flags.push(1);
				if(flags.length === length){
					if(paths.length === length){
						data = objectAssign({}, data, {images:JSON.stringify(paths),author: openId, createTime: createTime, status: 1});
						messageService.add(data,function (uRes) {
							res.json(uRes);
						});
					}else{
						res.json(objectAssign({},errConfig[3001]));
					}
				}
			});
		}
	}else{
		data = objectAssign({}, data, {author: openId, createTime: createTime, status: 1});
		messageService.add(data,function (uRes) {
			res.json(uRes);
		});
	}
	
	/*
	data = objectAssign({}, data, {author: openId, createTime: createTime, status: 1});
	messageService.add(data,function (uRes) {
		res.json(uRes);
	});*/
});

/**
 * [message列表]
 * @yansanmu github.com/yansm
 * @DateTime 2016-01-06T11:18:04+0800
 * @param    {[type]}                 req              [description]
 * @param    {[type]}                 res              [description]
 * @param    {[type]}                 next){	var      data                [description]
 * @param    {[type]}                 errConfig[9000]) );		return;	}	data [description]
 * @return   {[type]}                                  [description]
 */
router.post('/list',function(req, res, next){
	var data = req.body;

	data = objectAssign({}, data);
	messageService.list(data,function (uRes) {
		res.json(uRes);
	});
});

module.exports = router;
	
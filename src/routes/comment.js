var express = require('express');
var router = express.Router();
var commentService = reqlib('src/services/commentService');



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
	commentService.add(data,function (uRes) {
		res.json(uRes);
	});
	
	
	
});

module.exports = router;
	
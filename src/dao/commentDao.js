var mysql = require('mysql');

var objectAssign = require('object-assign');

var mysqlConfig = reqlib('config/mysql-config');

var errcodeConfig = reqlib('config/errcode-config');

// 使用连接池，提升性能
var pool  = mysql.createPool(objectAssign({}, mysqlConfig));

module.exports = {
	/**
	 * [add 添加评论]
	 * yansanmu 
	 * @DateTime 2016-01-11T22:41:04+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 */
	add: function(bean, callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var sql = 'INSERT INTO c8_comment(content, author, create_time, parent_id, re_id, type, status ) '
				+'VALUES(?,?,?,?,?,?,?)'
				,data = [bean.content, ''+bean.author, bean.createTime
					, +bean.parentId,bean.reId, bean.type, +bean.status];
	  		connection.query(sql, data, function(err, result) {
	        	if(err || !result) res = objectAssign({}, errcodeConfig[1001]); 
	        	bean.id = result.insertId;
	        	callback&& callback(objectAssign({},res,{data:bean})); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	},
	/**
	 * [list 评论列表]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-12T19:03:07+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	list: function(bean,callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var stamp = bean.stamp|| new Date().getTime(), limit = bean.limit || 10;
			var sql = 'select c.id as id, c.content as content, c.create_time as createTime,c.author as author,c.author=? as canRe '
				+',u.nick_name as nickName, u.user_name as userName, u.user_head as userHead,r.nick_name reNickName '
				+'from c8_comment c left join c8_user r on c.re_id = r.open_id ,c8_user u '
				+'where c.author = u.open_id and c.type=? and c.parent_id=? and c.status=1 and c.create_time < ? order by c.create_time desc limit 0,? ';
	  		connection.query(sql,[''+bean.openId, bean.type, bean.parentId, ''+stamp, +limit], function(err, result) {
	  			if(err) console.log('error: '+err);
	        	if(err || !result || !result.length) res = objectAssign(res,{data: []});
	        	else {
	        		res = objectAssign(res,{data:result});
	        	}
	        	callback&& callback(res); 
		        // 释放连接 
		        connection.release(); 
	    	});
	    });
	},

}
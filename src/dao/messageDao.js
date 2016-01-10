var mysql = require('mysql');

var objectAssign = require('object-assign');

var mysqlConfig = reqlib('config/mysql-config');

var errcodeConfig = reqlib('config/errcode-config');

// 使用连接池，提升性能
var pool  = mysql.createPool(objectAssign({}, mysqlConfig));

module.exports = {
	/**
	 * [add 添加一条message]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-05T19:19:56+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 */
	add: function(bean, callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var sql = 'INSERT INTO c8_message(content, author, create_time, images, status ) VALUES(?,?,?,?,?)'
				,data = [bean.content, ''+bean.author, bean.createTime, bean.images||'', bean.status];
	  		connection.query(sql, data, function(err, result) {
	        	if(!result) res = objectAssign({}, errcodeConfig[1001]); 
	        	callback&& callback(objectAssign({},res,{data:bean})); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	},
	/**
	 * [list 根据时间戳获取列表]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-06T11:03:13+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	list: function(bean,callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var stamp = bean.stamp|| new Date().getTime(), limit = bean.limit || 10;
			var sql = 'select u.nick_name as nickName, u.user_head as userHead, u.user_name as userName, m.create_time as createTime, m.content as content, m.images as images '
				+' from c8_user u,c8_message m where u.open_id = m.author and m.status = 1 and  m.create_time < ? order by m.create_time desc limit 0,?';
	  		connection.query(sql,[''+stamp, +limit], function(err, result) {
	        	if(!result || !result.length) res = objectAssign(res,{data: []});
	        	else res = objectAssign(res,{data:result});
	        	callback&& callback(res); 
		        // 释放连接 
		        connection.release(); 
	    	});
	    });
	},
	

}
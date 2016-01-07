var mysql = require('mysql');

var objectAssign = require('object-assign');

var mysqlConfig = reqlib('config/mysql-config');

var errcodeConfig = reqlib('config/errcode-config');

// 使用连接池，提升性能
var pool  = mysql.createPool(objectAssign({}, mysqlConfig));

module.exports = {
	/**
	 * [add 添加文章]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-07T15:56:21+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 */
	add: function(bean, callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var sql = 'INSERT INTO c8_article(title, content, author, create_time, update_time, status) VALUES(?,?,?,?,?,?)'
				,data = [bean.title, bean.content, ''+bean.author, bean.createTime, bean.createTime, bean.status];
	  		connection.query(sql, data, function(err, result) {
	        	if(!result) res = objectAssign({}, errcodeConfig[1001]); 
	        	bean.canWrite = 1;
	        	bean.id = result.insertId;
	        	callback&& callback(objectAssign({},res,{data:bean})); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	},
	/**
	 * [list 文章列表]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-07T17:13:08+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	list: function(bean,callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var stamp = bean.stamp|| new Date().getTime(), limit = bean.limit || 10;
			var sql = 'select u.nick_name as nickName, u.user_head as userHead, u.user_name as userName,'
				+' m.create_time as createTime, m.title as title, m.update_time as updateTime, m.id as id, m.author=? as canWrite, left(m.content, 60) as contentDesc '
				+' from c8_user u,c8_article m where u.open_id = m.author and m.status = 1 and  m.create_time < ? order by m.create_time desc limit 0,?';
	  		connection.query(sql,[''+bean.openId, ''+stamp, +limit], function(err, result) {
	  			if(err) console.log('error: '+err);
	        	if(!result || !result.length) res = objectAssign(res,{data: []});
	        	else res = objectAssign(res,{data:result});
	        	callback&& callback(res); 
		        // 释放连接 
		        connection.release(); 
	    	});
	    });
	},
	/**
	 * [queryById 根据id获取详情]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-07T19:50:05+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	queryById: function (bean, callback) {
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			
			var sql = 'select u.nick_name as nickName, u.user_head as userHead, u.user_name as userName,'
				+' m.create_time as createTime, m.title as title, m.update_time as updateTime, m.id as id, m.author=? as canWrite, m.content as content '
				+' from c8_user u,c8_article m where u.open_id = m.author and m.status = 1 and m.id=? ';
	  		connection.query(sql,[''+bean.openId, +bean.id], function(err, result) {
	  			if(err) console.log('error: '+err);
	        	if(!result || !result.length) res = objectAssign(res,{data: []});
	        	else res = objectAssign(res,{data:result});
	        	callback&& callback(res); 
		        // 释放连接 
		        connection.release(); 
	    	});
	    });
	}
	
}
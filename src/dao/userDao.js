var mysql = require('mysql');

var objectAssign = require('object-assign');

var mysqlConfig = reqlib('config/mysql-config');

var errcodeConfig = reqlib('config/errcode-config');

// 使用连接池，提升性能
var pool  = mysql.createPool(objectAssign({}, mysqlConfig));

module.exports = {
	/**
	 * [add description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2015-12-29T19:51:25+0800
	 * @param    {[opject]}                 bean     [用户bean]
	 * @param    {Function}               callback [description]
	 */
	add: function(bean, callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var sql = 'INSERT INTO c8_user(open_id, user_name, nick_name, stu_number, user_head, create_time) VALUES(?,?,?,?,?,?)'
				,data = [bean.openId, bean.userName, bean.nickName, bean.stuNum, bean.userHead, bean.createTime];
	  		connection.query(sql, data, function(err, result) {
	        	if(err || !result) res = objectAssign({}, errcodeConfig[1001]);
	        	callback&& callback(objectAssign({},res,{data:bean})); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	},
	/**
	 * [queryById description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2015-12-29T20:13:34+0800
	 * @param    {[opbect]}                 bean     [用户bean]
	 * @param    {Function}               callback [description]
	 */
	queryByOpenId: function(bean, callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var sql = 'select nick_name as nickName,user_head as userHead, user_name as userName,stu_number as stuNum from c8_user where open_id=?';
	  		connection.query(sql, bean.openId, function(err, result) {
	        	if(err || !result || !result.length) res = objectAssign(res,{data: null});
	        	else res = objectAssign(res,{data:result});
	        	callback&& callback(res); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	},
	/**
	 * [checkUser stuNum 查看用户是否存在]
	 * @yansanmu github.com/yansm
	 * @DateTime 2015-12-30T20:56:49+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 */
	checkUser: function(bean, callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var sql = 'select * from c8_user where stu_number=?';
	  		connection.query(sql, bean.stuNum, function(err, result) {
	        	if(err || !result || !result.length) res = objectAssign(res,{data: null});
	        	else res = objectAssign(res,{data:result});
	        	callback&& callback(res); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	},
	/**
	 * [list 用户列表]
	 * yansanmu 
	 * @DateTime 2016-01-03T23:33:37+0800
	 * @param    {[object]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 */
	list: function(bean,callback){
		var res = objectAssign({}, errcodeConfig[0]);
		pool.getConnection(function(err, connection) {
			var start = bean.startNum, end = bean.endNum;
			var sql = 'select nick_name as nickName,user_head as userHead, user_name as userName,stu_number as stuNum'
				+' from c8_user  order by create_time desc ' + (start&&end? (' limit '+ start +','+ end +' '): '');
	  		connection.query(sql, function(err, result) {
	        	if(err || !result || !result.length) res = objectAssign(res,{data: null});
	        	else res = objectAssign(res,{data:result});
	        	callback&& callback(res); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	}
}
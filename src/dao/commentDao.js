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
					, +bean.parentId,+(bean.reId||-1), bean.type, +bean.status];
	  		connection.query(sql, data, function(err, result) {
	        	if(!result) res = objectAssign({}, errcodeConfig[1001]); 
	        	bean.id = result.insertId;
	        	callback&& callback(objectAssign({},res,{data:bean})); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	},
	

}
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
				,data = [bean.content, ''+bean.author, bean.createTime, bean.images, bean.status];
	  		connection.query(sql, data, function(err, result) {
	        	if(!result) res = objectAssign({}, errcodeConfig[1001]); 
	        	callback&& callback(objectAssign({},res,{data:bean})); 
		        // 释放连接 
		        connection.release();
	    	});
	    });
	},
}
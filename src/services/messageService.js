var messageDao = reqlib('src/dao/messageDao');

module.exports = {
	/**
	 * [add description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-05T19:24:45+0800
	 * @param    {[type]}                 data     [description]
	 * @param    {Function}               callback [description]
	 */
	add: function (data, callback){
		messageDao.add(data, callback);
	} 
}
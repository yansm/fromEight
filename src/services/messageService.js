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
	},
	/**
	 * [list description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-06T11:17:48+0800
	 * @param    {[type]}                 data     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	list: function (data, callback){
		messageDao.list(data, callback);
	}
}
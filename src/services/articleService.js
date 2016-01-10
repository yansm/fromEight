var articleDao = reqlib('src/dao/articleDao');

module.exports = {
	/**
	 * [add description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-07T16:00:29+0800
	 * @param    {[type]}                 data     [description]
	 * @param    {Function}               callback [description]
	 */
	add: function (data, callback){
		articleDao.add(data, callback);
	},
	/**
	 * [update description]
	 * yansanmu 
	 * @DateTime 2016-01-10T13:55:10+0800
	 * @param    {[type]}                 data     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	update: function (data, callback) {
		articleDao.update(data, callback);
	},
	/**
	 * [list description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-07T17:20:23+0800
	 * @param    {[type]}                 data     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	list: function (data, callback) {
		articleDao.list(data, callback);
	},
	/**
	 * [queryById description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-07T19:52:46+0800
	 * @param    {[type]}                 data     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	queryById: function (data, callback){
		articleDao.queryById(data, callback);
	}
}
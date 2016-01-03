var userDao = reqlib('src/dao/userDao');

module.exports = {
	/**
	 * [add description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2015-12-29T20:21:27+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 */
	add: function (bean, callback) {
		userDao.add(bean,callback)
	},
	/**
	 * [queryByOpenId description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2015-12-30T13:48:10+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	queryByOpenId: function (bean, callback) {
		userDao.queryByOpenId(bean,callback)
	},
	/**
	 * [checkUser description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2015-12-30T20:56:22+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	checkUser: function (bean, callback) {
		userDao.checkUser(bean, callback);
	},
	/**
	 * [list description]
	 * yansanmu 
	 * @DateTime 2016-01-04T00:26:18+0800
	 * @param    {[type]}                 bean     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	list: function (bean, callback) {
		userDao.list(bean, callback);
	}

}
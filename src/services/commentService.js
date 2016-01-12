var commentDao = reqlib('src/dao/commentDao');

module.exports = {
	/**
	 * [add description]
	 * yansanmu 
	 * @DateTime 2016-01-11T22:48:36+0800
	 * @param    {[type]}                 data     [description]
	 * @param    {Function}               callback [description]
	 */
	add: function (data, callback){
		commentDao.add(data, callback);
	},
	/**
	 * [list description]
	 * @yansanmu github.com/yansm
	 * @DateTime 2016-01-12T19:14:06+0800
	 * @param    {[type]}                 data     [description]
	 * @param    {Function}               callback [description]
	 * @return   {[type]}                          [description]
	 */
	list: function (data, callback){
		commentDao.list(data, callback);
	}
}
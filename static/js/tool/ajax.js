var $ = require('zepto');

module.exports = function (config) {
	var callback = config.callback;
	$.ajax({
		url: config.url,
		type: config.type || 'post',
		data: config.data || null,
		success: config.success || function (e) {
			callback && callback(e);
		},
		contentType: config.contentType,
		error: config.error || function () {
			callback && callback({code: -1});
		}
	});
}  
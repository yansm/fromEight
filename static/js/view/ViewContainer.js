var pages = {};

pages.regstu = require('./regStuView');
pages.reguser = require('./regUserView');

pages.main = require('./mainView');

pages.error = require('./errorView');

pages.main = require('./mainView');

pages.message = require('./messageView');


module.exports = {
	get: function (page) { 
		return pages[page]|| null;
	}
} 
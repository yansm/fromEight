var pages = {};

pages.regstu = require('./regStuView');
pages.reguser = require('./regUserView');

pages.main = require('./mainView');

pages.error = require('./errorView');

pages.main = require('./mainView');

pages.message = require('./messageView');
pages.addmsg = require('./addMsgView');

pages.article = require('./articleView');
pages.addart = require('./addArtView');
pages.detailart = require('./detailArtView')

pages.addcom = require('./addComView');

module.exports = {
	get: function (page) { 
		return pages[page]|| null;
	}
} 
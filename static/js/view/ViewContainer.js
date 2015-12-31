var pages = {};

pages.regstu = require('./regStuView');
pages.reguser = require('./regUserView');

pages.main = require('./mainView');

pages.error = require('./errorView');


pages.welcome1 = require('./welcome1View');
pages.welcome2 = require('./welcome2View');
pages.welcome3 = require('./welcome3View');

pages.list1 = require('./list1View');
pages.list2 = require('./list2View');
pages.list3 = require('./list3View');
pages.article1 = require('./article1View');
pages.article2 = require('./article2View');



module.exports = {
	get: function (page) {
		return pages[page]|| null;
	}
} 
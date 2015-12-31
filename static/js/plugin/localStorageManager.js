var flag = !!window.localStorage;

module.exports = {
	get: function (key) {
		return flag? localStorage.getItem(key): null;
	},
	set: function (key, value){
		flag && localStorage.setItem(key, value);
	},
	remove: function (key) {
		flag && localStorage.removeItem(key);
	}
}; 
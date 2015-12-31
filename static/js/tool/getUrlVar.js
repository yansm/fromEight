
module.exports = function (url,key) {
	var reg = new RegExp('(\\?|\\&)'+ key +'=([^\\&]+)')
	var value = url.match(reg); 
	return value&&value.length? value[2] : null;
}
var symbols = require('symbols');

module.exports = {
	transform: function(str) {
		var transformed = '';
		for (var i=0;i<str.length;i++) {
			transformed += symbols.is_vovel(str[i]) ? 'f'+str[i] : str[i];
		}
		return transformed;
	}
}

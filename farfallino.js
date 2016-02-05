var symbols = require('symbols');

module.exports = {
	transform: function(str) {
		var transformed = '';
		for (var i=0;i<str.length;i++) {
			transformed += str[i];
			if (symbols.is_vowel(str[i])) {
				transformed += 'f'+str[i];
			}
		}
		return transformed;
	}
}

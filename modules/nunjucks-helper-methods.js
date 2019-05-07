module.exports = {
	getstyleAttributeFromStyles: function(styles) {
		if (!Object.keys(styles).length) {
			return;
		}

		const properties = Object.keys(styles).map(function(property){
			switch (property.toLocaleLowerCase()) {
				case 'background-image':
					return `${property}: url('${styles[property]}');`;
				default:
					return `${property}: ${styles[property]};`;
			}
		}).join('');

		return `style="${properties}"`;
	},
	getFileExtension: function (filename) {
		return filename.split('.').pop();
	},
	isArray: function (data) {
		return Array.isArray(data);
	}
};

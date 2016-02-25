var config = require('./config.json');
var fs = require('fs-extra');
var path = require('path');
var utils = require('./utils');

module.exports = {

	setFrameworkType: function(type) {
		//define if put type is present in config
		if (config.frameworkTypes.indexOf(type) > -1) {
			//change type if it's not already set
			if (config.frameworkType != type) {
				var configFile = path.join(__dirname, 'config.json');
				//reading file
				fs.readFile(configFile, 'utf8', function (err, data) {
					if (err) {
						return console.log(err);
					}
					data = JSON.parse(data);
					data.moduleType = type;
					//rewriting file
					fs.writeFile(configFile, JSON.stringify(data, null, 4), 'utf8', function (err) {
						if (err) {
							return console.log(err);
						}
					});
				});
			}
		} else {
			return console.log('Wrong type, available types: %j', config.moduleTypes);
		}
	},

	newApp: function(folder) {
		var type = config.frameworkType;
		var appPath = path.join(process.cwd());
		if (folder) {
			appPath = path.join(appPath, folder);
		}
		var appSrc = config.apps[type];
		utils.gitClone(appSrc, appPath);
	},

	create: function(folder, cmd) {

	}

};

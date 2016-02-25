var fs = require('fs-extra');
var clone = require('nodegit').Clone.clone;

exports.fileCopy = function(file, newFileSrc) {
	fs.copy(file, newFileSrc);
};

exports.gitClone = function(src, folder) {
	clone(src, folder, null);
};

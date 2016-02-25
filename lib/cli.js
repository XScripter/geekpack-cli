exports.run = function() {

	var program = require('commander');
	var commands = require('./commands');
	var config = require('./config.json');

	program.version(require('../package.json').version);

	//set module type
	program
		.command('set <type>')
		.description('Change framework type. Short - s')
		.option('-t --type <type>', 'Framework type')
		.action(commands.setFrameworkType);

	//generate new app skeleton
	program
		.command('new [folder]')
		.description('Create new project. Short - n')
		.action(commands.newApp);

	//process short command names
	var args = process.argv.slice();
	var command = args[2];
	var validCommand = config.aliases[command];

	if (validCommand) {
		args[2] = validCommand;
	}
	program.parse(args);
};

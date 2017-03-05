const files     = require('../lib/files'),
      fs        = require('fs'),
      path      = require('path'),
      Preferences  = require('preferences'),
      genHelper  = require('../lib/genHelper'),
      dockerHelper  = require('../lib/dockerHelper'),
      inquirer  = require('inquirer');
var questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter a name for the application:',
    default: files.getCurrentDirectoryBase(),
    validate: function( value ) {
      if (value.length) {
        return true;
      } else {
        return 'Please enter a name for the repository';
      }
    }
  },
  {
    type: 'input',
    name: 'directory',
    message: 'Enter a directory for the application:',
    default: process.cwd(),
    validate: function( value ) {
      if (value.length) {
        return true;
      } else {
        return 'Please enter a directory for the application';
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    default: null,
    message: 'Optionally enter a description of the application:'
  },
  {
    type: 'input',
    name: 'web-port',
    default: 8080,
    message: 'Enter the port to access the WordPress installation:'
  },
  {
    type: 'input',
    name: 'mysql-port',
    default: 3306,
    message: 'Enter the port for the mySQL database connection:'
  },
  {
    type: 'input',
    name: 'db-name',
    default: 'wordpress',
    message: 'Enter the name for the mySQL database:'
  },
  {
    type: 'input',
    name: 'db-username',
    default: 'wordpress',
    message: 'Enter the name for the mySQL user:'
  },
  {
    type: 'password',
    name: 'db-password',
    default: 'wordpress',
    message: 'Enter the password for the mySQL database:'
  },
];

module.exports = {
  print: function() {
    console.log(`
***********************************  WP-Gen  ***********************************

Welcome, we're gonna have you answer a few questions and then go to work on
building you shiny new app. Shall we begin?...

********************************************************************************
      `);
    inquirer.prompt(questions).then(function(answers) {
      genHelper.registerApp(answers);

      var appDir = genHelper.createAppDir(answers); // creates the directory with docker-compose.yml in it
      dockerHelper.startDocker(answers); // starts docker-compose in app directory, this will create and populate wp-data dir.
      createPlugin(); // creates the plugin directory and adds the plugin boilerplate file.
    });
  }
};

const files     = require('../lib/files'),
      fs        = require('fs'),
      path      = require('path'),
      CLI          = require('clui'),
      Spinner      = CLI.Spinner,
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
      // storing the app information
      genHelper.registerApp(answers);
      // creating the project folder and docker configuration
      var appDir = genHelper.createAppDir(answers);
      // starting the docker containers
      dockerHelper.startDocker(answers);
      // polling the app on the configured http port

      var status = new Spinner('Starting the application, please wait...');
      status.start();
      var isItUp = dockerHelper.pollWebContainer()
      .then(function() {
        status.stop();
          console.log('App is up :)')
      })
      .catch(function() {
        status.stop();
        console.log('POLLING FAILED - App is down :(');
      })

      //createPlugin(); // creates the plugin directory and adds the plugin boilerplate file.
    });
  },
  clear: function() {
    var prefs = new Preferences('io.stlws.wpgen');
    prefs.appList = [];
    console.log('cleared the apps list.');
  }
};

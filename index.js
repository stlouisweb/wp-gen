#!/usr/bin/env node --harmony

"use strict";

const chalk        = require('chalk'),
      clear        = require('clear'),
      CLI          = require('clui'),
      figlet       = require('figlet'),
      inquirer     = require('inquirer'),
      Preferences  = require('preferences'),
      Spinner      = CLI.Spinner,
      GitHubApi    = require('github'),
      _            = require('lodash'),
      git          = require('simple-git')(),
      minimist     = require('minimist'),
      touch        = require('touch'),
      fs           = require('fs'),
      files        = require('./lib/files'),
      help         = require('./commands/help'),
      gen         = require('./commands/gen');

let argv = minimist(process.argv.slice(2));
let command = argv._[0];

if (command === 'help') {
  help.print();
} else {
  clear();
  console.log(
    chalk.cyan(
      figlet.textSync('WP-Gen', { horizontalLayout: 'full', font: 'Big Money-nw' })
    )
  );
  console.log(
    chalk.cyan(`
  Generator and commandline utility for building custom applications
  with a WordPress back-end and ReactJS front-end.
  Type "wpgen help" for a list of commands.
    `)
  );
  gen.print();
}

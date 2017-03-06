"use strict"

const cp = require("child_process"),
      fs = require("fs");

module.exports = {
  startDocker: function(app) {
    console.log('starting docker containers');
    var composeFile = app.directory + '/' + app.name + '/docker-compose.yml';
    console.log(composeFile);
    let runDockerCmd = `docker-compose -f ${composeFile} up -d`;
    var p = cp.exec(runDockerCmd, {
       stdio: "inherit"
    });
      // if (dockerFileExists) {
      //   let runDockerCmd = `docker-compose -f ${app.directory + '/' + app.name}/docker-compose.yml up -d`;
      //   var p = cp.exec(runDockerCmd, {
      //   stdio: "inherit"
      //   });
  }
}

"use strict"

const exec = require('child_process').exec;

module.exports = {
  startDocker: function(app) {
    let runDockerCmd = `docker-compose -f ${app.directory + '/' + app.name}/docker-compose.yml up`;
    exec(runDockerCmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  }
}

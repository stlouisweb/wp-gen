"use strict"

const cp = require("child_process"),
      fs = require("fs"),
      http = require('http');

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
  },
  pollWebContainer: function() {
    return new Promise(
    function (resolve, reject) {
      var options = {
        counter: 0,
        max: 7
      };
      function tryGet() {
        if (options.counter < options.max) {
          var request = http.get('http://localhost:8000', (res) => {
            resolve(true);
          });
          request.on('error', function(err) {
            //console.log('err', err);
            setTimeout(tryGet, 7000);
          });
          request.end();
        } else {
          reject(false);
        }
        options.counter = options.counter + 1;
      }
      tryGet();
    });


  }
}

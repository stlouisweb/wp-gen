const files     = require('../lib/files'),
      fs        = require('fs'),
      path      = require('path'),
      Preferences  = require('preferences');

module.exports = {
  createAppDir: function(add) {
    var appDir = add.directory + '/' + add.name;
    fs.mkdirSync(appDir);
    var dockerComposeFile = path.join(__dirname, '..', 'data/docker-compose.yml');
    fs.createReadStream(dockerComposeFile).pipe(fs.createWriteStream(appDir + '/docker-compose.yml'));
    return appDir;
  },
  registerApp: function(add) {
    var prefs = new Preferences('io.stlws.wpgen');
    if (prefs.appList) {
      if (prefs.appList && prefs.appList.length > 0) {
        var appMatch = prefs.appList.filter(function(app) { return app.name == add.name});
        if (appMatch.length > 0) {
          console.log(add.name + ' app exists! delete it or pick another name.')
        } else {
          var apps = prefs.appList;
          apps.push(add);
          prefs.appList = apps;
          console.log('adding ' + add.name + ' app!');
        }
      } else {
        var apps = [];
        apps.push(add);
        prefs.appList = apps;
        console.log('adding appList and ' + add.name + ' app!');
      }
    } else {
      var apps = [];
      apps.push(add);
      prefs.appList = apps;
      console.log('adding appList and ' + add.name + ' app!');
    }
  }
};

module.exports = {
  print: function() {
    console.log(`
********************************  WP-Gen Help  ********************************

COMMANDS:

Command [params]:       Options:            Description:
WP-Gen                                      Starts the app creation wizard.
WP-Gen list                                 Displays a list of all WP-Gen apps.
WP-Gen active                               Displays the current;y active app.
WP-Gen use [appname]                        Sets the currently active app
                                            if appname matches an existing app.
WP-Gen goto [appname]                       Navigates terminal to the active
                                            app's directory, or to the specified
                                            app's directory if provided.
WP-Gen rm [appname]                         Removes the active app, or specified
                                            app, if provided.
                        --hard              deletes the apps files in addition
                                            to removing the app from app gen.
                                                  
*******************************************************************************
      `);
  }
};

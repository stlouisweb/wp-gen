    $$\      $$\ $$$$$$$\           $$$$$$\                      
    $$ | $\  $$ |$$  __$$\         $$  __$$\                     
    $$ |$$$\ $$ |$$ |  $$ |        $$ /  \__| $$$$$$\  $$$$$$$\  
    $$ $$ $$\$$ |$$$$$$$  |$$$$$$\ $$ |$$$$\ $$  __$$\ $$  __$$\
    $$$$  _$$$$ |$$  ____/ \______|$$ |\_$$ |$$$$$$$$ |$$ |  $$ |
    $$$  / \$$$ |$$ |              $$ |  $$ |$$   ____|$$ |  $$ |
    $$  /   \$$ |$$ |              \$$$$$$  |\$$$$$$$\ $$ |  $$ |
    \__/     \__|\__|               \______/  \_______|\__|  \__|



# WP-Gen CLI
#### A command line utility for building web applications with WordPress, ReactJS and Docker.

WP-Gen initializes apps by creating 2 docker containers, one for WordPress and the other for the MySQL database.

Once the application containers have started there will be a linked data directory containing the WordPress files. This data directory will also include the **WP-Gen Framework Plugin** as a WordPress plugin with the same name as the application `wp-data/wp-content/plugins/[your-apps-name]`

The WP-Gen framework provides many features to transform your WordPress website into a powerful modern web application:

- Custom Router: the wp-gen router takes over the standard WordPress routes, allowing you to display a custom template.
- Dependency Injection - WP-Gen features PHP Namespaces and an IOC container with dependency injection, allowing you to quickly write clean object oriented code.
- ReactJS front-end: WP-Gen features front-end build tools to enhance developer productivity with ES6 JavaScript, SaSS CSS preprocessor and ReactJS which lets you build a reactive single page application for both public and admin screens.
- WordPress core: on top of this additional functionality, all of the core WordPress methods, hooks and filters are available from within the WP-Gen framework.
- Generators: WP-Gen CLI provides many commands to generate boilerplate routes, templates, models, controllers, post-types, taxonomies, loops, etc.
- Docker Orchestration: WP-Gen is powered by Docker, which makes it super easy to set up and share a development environment, and when it is time to release your app to the world deploying with Docker will eliminate the risk of bugs caused by environmental discrepancies.

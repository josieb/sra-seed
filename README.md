sra-seed
========

File Layout:

    bin/server
    lib/
    web/
      assets/
        lib/
        modules/
        app.js # Define the angular modules and constants.
        main.js # Within require's callback, bootstrap the angular app upon document ready.
        main.css
        routes.js # Configure the angular location provider and route provider.
      spec/
      views/
        index.erb # Serve /lib/require and stylesheets.

js libs:

- bower # project management
- grunt
- grunt-cli
- node
- angular # app
- angular-strap
- bootstrap
- d3
- font-awesome
- jasmine
- jquery
- moment
- ng-grid
- require
- slider
- underscore
- express # experimental
- impress
- ui-router

sra-seed
========

bin/server
lib/
web/
  assets/
    lib/
    modules/
    app.js # Define the angular modules and constants.
    build.js
    main.js # Within require's callback, bootstrap the angular app upon document ready.
    main.css
    routes.js # Configure the angular location provider and route provider.
  spec/
  views/
    index.erb # Serve /lib/require and stylesheets.

libs:
- angular
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
- express
- impress
- node
- ui-router

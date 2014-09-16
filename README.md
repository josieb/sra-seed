sra-seed
========

A seed for a full-stack modular web app featuring Sinatra and AngularJS.

## Directory Layout

```
bin/server
conf/config.ru
lib/server_app.rb
web/
  assets/
    lib/
    modules/
      module1/
        module1.html
        module1.js
    app.js # Define the angular module.
    main.css
    main.js # Within requirejs's callback, bootstrap the angular app upon document ready.
    routes.js # Configure the angular location provider and route provider.
  views/
    index.erb # Serve /lib/require and stylesheets.
```

## TODO

* Add support for testing

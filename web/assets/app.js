'use strict';

define['angular'], function(angular) {
  var app = angular.module('clientApp', []);
  app.constant('INTERVAL', 5000);
  return app;
});

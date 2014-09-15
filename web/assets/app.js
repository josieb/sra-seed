'use strict';

define([
  'angular',
  'uiRouter',
  'modules/dashboard/_module',
  'modules/things/_module'
], function(
  angular,
  uiRouter,
  dashboardModule,
  thingsModule
) {
  var clientAppModule = angular.module('clientApp', [
    'ui.router',
    'clientApp.dashboard',
    'clientApp.things'
  ]);
  clientAppModule.constant('prefixUrl', function(url) {
    return '/app' + url;
  });
  clientAppModule.constant('INTERVAL', 5000);
  return clientAppModule;
});

'use strict';

/* Define the angular module, specifying any sub-modules as dependencies. */
define([
  'angular',
  'uiRouter',
  'modules/common/_module',
  'modules/dashboard/_module',
  'modules/things/_module'
], function(
  angular,
  uiRouter,
  commonModule,
  dashboardModule,
  thingsModule
) {
  var clientAppModule = angular.module('clientApp', [
    'ui.router',
    'clientApp.common',
    'clientApp.dashboard',
    'clientApp.things'
  ]);
  return clientAppModule;
});

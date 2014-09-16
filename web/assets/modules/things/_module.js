'use strict';

define([
  'angular',
  './ThingsController',
  './ThingsService'
], function(
  angular,
  ThingsController,
  ThingsService
) {
  var thingsModule = angular.module('clientApp.things', []);

  thingsModule.config(['$stateProvider', 'prefixUrl',
  function($stateProvider, prefixUrl) {
    $stateProvider
      .state('things', {
        url: prefixUrl('/things'),
        templateUrl: '/modules/things/things.html',
        controller: ThingsController
      });
  }]);

  thingsModule.factory('ThingsService', ThingsService);

  return thingsModule;
});

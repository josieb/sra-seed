'use strict';

define(['angular'], function(angular) {
  var dashboardModule = angular.module('clientApp.things', []);

  dashboardModule.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('things', {
        url: '/app' + '/things'
      });
  }]);

  return dashboardModule;
});

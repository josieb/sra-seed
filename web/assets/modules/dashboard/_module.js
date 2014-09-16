'use strict';

define([
  'angular',
  './DashboardController',
  './DashboardService'
], function(
  angular,
  DashboardController,
  DashboardService
) {
  var dashboardModule = angular.module('clientApp.dashboard', []);

  dashboardModule.config(['$stateProvider', 'prefixUrl',
  function($stateProvider, prefixUrl) {
    $stateProvider
      .state('dashboard', {
        url: prefixUrl('/dashboard'),
        templateUrl: '/modules/dashboard/dashboard.html',
        controller: DashboardController
      });
  }]);

  dashboardModule.factory('DashboardService', DashboardService);

  return dashboardModule;
});

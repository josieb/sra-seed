'use strict';

define(['angular', './DashboardController'],
function(angular, DashboardController) {
  var dashboardModule = angular.module('clientApp.dashboard', []);

  dashboardModule.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/app' + '/dashboard',
        templateUrl: '/modules/dashboard/dashboard.html',
        controller: DashboardController
      });
  }]);

  dashboardModule.controller('DashboardController', DashboardController);

  return dashboardModule;
});

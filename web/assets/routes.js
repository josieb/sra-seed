'use strict';

define(['app'], function(app) {
  return app.config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    'prefixUrl',
  function(
    $locationProvider,
    $stateProvider,
    $urlRouterProvider,
    prefixUrl
  ) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('default', {
        url: '/app',
        template: '<h3>This is the default view.</h3>'
      })
      .state('not-found', {
        url: '/app' + '/not-found',
        template: "<h3>This view doesn't exist.</h3>"
      });

    $urlRouterProvider.otherwise('/app' + '/not-found');
  }]);
});

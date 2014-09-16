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
        url: prefixUrl(),
        template: '<h3>This is the default view.</h3>' +
          '<p>Try the <a href="/app/dashboard">dashboard</a> view.</p>' +
          '<p>Or possibly the <a href="/app/things">things</a> view.</p>'
      })
      .state('not-found', {
        url: prefixUrl('/not-found'),
        template: "<h3>This view doesn't exist.</h3>"
      });

    $urlRouterProvider.otherwise( prefixUrl('/not-found') );
  }]);
});

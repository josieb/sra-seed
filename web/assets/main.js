'use strict';

require.config({
  baseUrl: '/',
  paths: {
    angular: 'lib/angularjs/angular'
  },
  shim: {
    'angular': {exports: 'angular'}
  },
  priority: ['angular']
});

require(['angular', 'app'], function(angular, app) {
  var $html = angular.element( document.getElementsByTagName('html')[0] );

  angular.element().ready(function() {
    angular.resumeBootstrap([app['clientApp']]);
  });
});

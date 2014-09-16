'use strict';

/**
 * Within requirejs's callback, bootstrap the angular app upon document
 * ready.
 */
require.config({
  baseUrl: '/',
  paths: {
    'angular': 'lib/angular/angular',
    'uiRouter': 'lib/angular-ui-router/release/angular-ui-router',
    'underscore': 'lib/underscore/underscore'
  },
  shim: {
    'angular': {exports: 'angular'},
    'uiRouter': {deps: ['angular']}
  },
  priority: ['angular']
});

require(['angular', 'app', 'routes'], function(angular) {
  angular.element(document).ready(function() {
    angular.bootstrap(document, ['clientApp']);
  });
});

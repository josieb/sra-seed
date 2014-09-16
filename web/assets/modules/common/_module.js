'use strict';

define(['angular'], function(angular) {
  var commonModule = angular.module('clientApp.common', []);

  commonModule.constant('prefixUrl', function(url) {
    var suffix = url || ''
    return '/app' + suffix;
  });
  commonModule.constant('INTERVAL', 5000);

  return commonModule;
});

'use strict';

define([], function() {
  var ThingsController = function($scope, ThingsService) {
    ThingsService.things().then(function(data) {
      $scope.things = data;
    });
  };

//  ThingsController.$inject = ['$scope', 'ThingsService'];

  return ThingsController;
});

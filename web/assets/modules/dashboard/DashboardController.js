'use strict';

define(['underscore'], function(_) {
  var DashboardController = function($scope, DashboardService) {
    DashboardService.numbers().then(function(data) {
      $scope.numbers = data;
      var bigNumbers = _.map( data, function(num) { return num * 100 } );
      var interestingNumber = _.reduce( bigNumbers, function(memo, num) { return memo + num }, 0 );
      $scope.message = interestingNumber + ' is an interesting number.';
    });
  };

  return DashboardController;
});

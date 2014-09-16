'use strict';

define([], function() {
  var DashboardService = function($http, $q) {
    return {
      numbers: function() {
        var deferred = $q.defer();
        $http.get('/api/numbers', {}).success(function(data) {
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    }
  };

//  DashboardService.$inject = ['$http', '$q'];

  return DashboardService;
});

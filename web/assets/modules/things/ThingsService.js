'use strict';

define([], function() {
  var ThingsService = function($http, $q) {
    return {
      things: function() {
        var deferred = $q.defer();
        $http.get('/api/entities/things', {}).success(function(data) {
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    }
  };

//  ThingsService.$inject = ['$http', '$q'];

  return ThingsService;
});

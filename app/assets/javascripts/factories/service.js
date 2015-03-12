(function () {
  "use strict";
  angular.module('RiffApp')
  .factory('RiffService', function ($http) {
    var url = 'http://localhost:9000/';


    var getAllRiffs = function () {
      return $http.get(url);
    }

    return {
      getRiffs: getAllRiffs,

    }

  })

});

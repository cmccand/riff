(function () {
  "use strict";

  angular.module('RiffApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/audio', {
      templateUrl: 'templates/record.html',
      controller: 'RiffController as riffCtrl'
    })


  });

})();

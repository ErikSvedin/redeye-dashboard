angular.module('redeyeDashboard').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: '../templates/start.html',
        controller: 'StartController'
      }).
      when('/info', {
        templateUrl: '../templates/info.html',
        controller: 'InfoController'
      }).
      otherwise({
        redirectTo: '/start'
      });
  }]);
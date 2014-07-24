angular.module('redeyeDashboard')
    .controller('MainController', ['$scope', '$location', function ($scope, $location) {
        $scope.menuActive = true;

        $scope.toggleLeftMenu = function(){
            $scope.menuActive ? $scope.menuActive = false : $scope.menuActive = true;
        }

        $scope.isActive = function(route) {
            return route === $location.path();
        }

    }]);


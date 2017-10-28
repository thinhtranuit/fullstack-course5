(function () {
    var app = angular.module('LunchCheck',[]);
    app.controller('LunchCheckController', ['$scope', function ($scope) {
        $scope.message = "";
        $scope.input = "";
        $scope.execute = function () {
            $scope.menu = $scope.input.split(',');
            $scope.menu = $scope.menu.filter(function (item) {
               return item.trim() !== '';
            });
            console.log($scope.menu);
            if ($scope.input.length <= 0){
                $scope.message = "Please enter data first";
                $scope.state = 'error';
            } else if ($scope.menu.length <= 3){
                $scope.message = "Enjoy!";
                $scope.state = 'good';
            } else {
                $scope.message = "Too much!";
                $scope.state = 'error';
            }
        };
    }])
})();
// initialize the app
angular.module('title', []);

// main controller
angular.module('title').controller('titleCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/titles').success(function(response) {
        $scope.titles = response;
    });




    $http.get('http://localhost:3000/skills').success(function(response) {
        $scope.skills = response;
    });
});

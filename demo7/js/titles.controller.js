
angular.module('Demo').controller('TitlesCtrl', function($scope, $http, TitleFactory) {
    'use strict';

    $scope.titles = TitleFactory.titles;

    $scope.upsertTitle = function(title) {

        if (title.id) {
            $http.put('http://localhost:3000/titles/' + title.id, {title: title});
        } else {
            $http.post('http://localhost:3000/titles', {title: title}).success(function(response) {
                $scope.titles.push(response);
            });
        }

        $scope.title = {};
    };

    $scope.editTitle = function(title) {
        $scope.title = title;
    };

    $scope.deleteTitle = function(title) {
        $http.delete('http://localhost:3000/titles/' + title.id).success(function(response) {
              var index = $scope.titles.indexOf(title);
            $scope.titles.splice(index, 1);
        });
    };
});

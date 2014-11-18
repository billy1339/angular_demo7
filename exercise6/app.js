// initialize the app
angular.module('title', []);

// main controller
angular.module('title').controller('titleCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/titles').success(function(response) {
        $scope.titles = response;
    });


  $scope.createTitle = function(title) {
    $http.post('http://localhost:3000/titles', {title: title}).success(function(response) {
          $scope.titles.push(response);
      });
  }

  $scope.deleteTitle = function(title) {
    $http.delete('http://localhost:3000/titles/'+title.id).success(function(response) {
          // $scope.titles = response;
          var index = $scope.titles.indexOf(title);
          $scope.titles.splice(index, 1);
      });
  }

  $scope.updateTitle = function(title) {
    $http.put('http://localhost:3000/titles/'+title.id, {title: title}).success(function(response) {
          console.log('we did it!')
          $scope.title = {};
      });
  }
});

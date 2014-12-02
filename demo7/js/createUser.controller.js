angular.module('Demo').controller('createUserCtrl', function($scope, $location, AuthFactory, $http) {
    'use strict';

  $scope.createUser = function(credentials) {
    var user = { user: credentials}
    $http.post('http://localhost:3000/users', user).success(function(response) {
      login(credentials);
    });
  }

  var login = function(credentials) {
    AuthFactory.login(credentials).success(function(response) {
      $location.path('/');
    });
  };


});

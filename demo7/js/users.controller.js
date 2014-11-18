
angular.module('Demo').controller('UsersCtrl', function($scope, $http, TitleFactory, UserFactory) {
    'use strict';


    $scope.users = UserFactory.users;
    $scope.titles = TitleFactory.titles;

    $scope.upsertUser = function(user) {

        var params = {user: user};

        if (user.id) {
            $http.put('http://localhost:3000/users/' + user.id, params).success(function(response) {   //{user: {first_name: user.first_name, last_name: user.last_name}})
                UserFactory.fetch();
            });
            } else {
            $http.post('http://localhost:3000/users', params).success(function(response) {
                // $scope.users.push(response);
                UserFactory.fetch();

            });
        }

        $scope.user = {};
    };

    $scope.editUser = function(user) {
        $scope.user = user;
    };

    $scope.deleteUser = function(user) {
        $http.delete('http://localhost:3000/users/' + user.id).success(function(response) {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
        });
    };
});

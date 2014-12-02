
angular.module('Demo').controller('UsersCtrl', function($scope, $http, $q, TitleFactory, UserFactory, SkillsFactory) {
    'use strict';


    $scope.users = UserFactory.users;
    $scope.titles = TitleFactory.titles;
    $scope.skills = SkillsFactory.skills;

    var updateSkills = function(user_id) {
        var promises = [];

        _.forEach($scope.skills, function(item) {
            var isChecked = item.checked;
            var wasChecked = typeof _.find($scope.user.skills, {id: item.id}) !== 'undefined';

            // add skill
            if (isChecked && !wasChecked) {
                promises.push($http.put('http://localhost:3000/' + 'users/' + user_id + '/skills/' + item.id));
            }

            // remove skill
            if (!isChecked && wasChecked) {
                promises.push($http.delete('http://localhost:3000/' + 'users/' + user_id + '/skills/' + item.id));
            }
        });

        return promises;
    };

     var clearForm = function() {
        $scope.user = {};

        UserFactory.fetch();
        SkillsFactory.resetChecked();
    };

      $scope.upsertUser = function(user) {
        var params = {
            user: user
        };

        if (user.id) {
            $http.put('http://localhost:3000/' + 'users/' + user.id, params).success(function(response) {
                $q.all(updateSkills(user.id)).then(function() {
                    clearForm();
                });
            });
        } else {
            $http.post('http://localhost:3000/' + 'users', params).success(function(response) {
                $q.all(updateSkills(response.id)).then(function() {
                    clearForm();
                });
            });
        }
    };

    $scope.editUser = function(user) {
        $scope.user = user;
    };



    $scope.userHasSkill = function(skill) {
        var found = [];
         if (typeof $scope.user !== 'undefined' && typeof $scope.user.skills !== 'undefined') {
            found = $scope.user.skills.filter(function(item) {
                return item.id === skill.id;
            });
        };

        return found.length > 0;
    };

    $scope.deleteUser = function(user) {
        $http.delete('http://localhost:3000/users/' + user.id).success(function(response) {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
        });
    };
});


angular.module('Demo').directive('gaModal', function() {
    return {
        restrict: 'E',

        transclude: true,

        templateUrl: 'templates/modal.html',

        scope: {
            title: '@',
            datauserid: '@'
        }
    };
});


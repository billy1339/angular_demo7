
angular.module('Demo').factory('SkillsFactory', function($http) {
    var skills = [];

    var resetChecked = function() {
        _.forEach(skills, function(item) {
            item.checked = false;
        })
    }

    var fetch = function() {
        $http.get('http://localhost:3000/skills').success(function(response) {
            // use angular.copy() to retain the original array which the controllers are bound to
            // tasks = response will overwrite the array with a new one and the controllers loose the reference
            // could also do tasks.length = 0, then push in the new items
            angular.copy(response, skills);
        });
    };

    return {
        skills: skills,
        fetch: fetch,
        resetChecked: resetChecked
    };
});

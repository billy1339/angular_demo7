// initialize the app
angular.module('Demo', [
    'ngRoute'
]);


// angular.module('Demo').run(function(TitleFactory) {
//     TitleFactory.fetch();
// });

angular.module('Demo').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
         .when('/users', {
            templateUrl: 'templates/users.html'
        })
        .when('/titles', {
            templateUrl: 'templates/titles.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('Demo').controller('NavbarCtrl', function($scope, $location) {
    'use strict';

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

angular.module('Demo').controller('TitlesCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/titles').success(function(response) {
        $scope.titles = response;
    });

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

angular.module('Demo').controller('UsersCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/users').success(function(response) {
        $scope.users = response;
    });

    // $scope.title = TitleFactory.titles;

    $scope.upsertUser = function(user) {

        if (user.id) {
            $http.put('http://localhost:3000/users/' + user.id, {user: {first_name: user.first_name, last_name: user.last_name}});
        } else {
            $http.post('http://localhost:3000/users', {user: user}).success(function(response) {
                $scope.users.push(response);
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

// angular.module('Demo').factory('TitleFactory', function($scope, $http) {
//     'use strict';

//     var titles = [];

//     var fetch = function() {
//         $http.get('http://localhost:3000/titles').success(function(response) {
//             $scope.titles = response
//             angular.copy(response, titles);
//         });
//     };

//     return {
//         titles: titles,
//         fetch: fetch
//     };

// });


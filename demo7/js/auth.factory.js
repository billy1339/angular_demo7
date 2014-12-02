angular.module('Demo').factory('AuthFactory', function($http, $window) {
    var login = function(credentials) {
        return $http
            .post('http://localhost:3000/login', credentials)
            .success(function(response) {
                $window.sessionStorage.setItem('demo.user', response.token);

                $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('demo.user');
            });
    };

    var logout = function(credentials) {
        return $http
            .get('http://localhost:3000/logout')
            .success(function(response) {
                $window.sessionStorage.removeItem('demo.user');
            });
    };

    var isAuthenticated = function() {
        return !!$window.sessionStorage.getItem('demo.user');
    };

    return {
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
});

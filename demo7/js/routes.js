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
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/createUser', {
            templateUrl: 'templates/createUser.html',
            controller: 'createUserCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

});

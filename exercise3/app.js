angular.module('Demo', []);

// main controller
angular.module('Demo').controller('CartCtrl', function($scope) {
    'use strict';

    $scope.CartItems = [{
        name: 'apple',
        quantity: 3,
        price: 0.75
    }, {
        name: 'coffee',
        quantity: 5,
        price: 1.5
    }, {
        name: 'cake',
        quantity: 3,
        price: 5.25
    }];



// angular.module('Demo').controller('addCtrl', function($scope) {

    $scope.CreateCartItem = function(CartItem) {
        $scope.CartItems.push(CartItem);
        $scope.CartItem = {};
    };
// });
});

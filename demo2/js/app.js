// initialize the app
// you need to tell the module that i does not have any dependencies with the [] otherwise it will blow up.
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';
    // 'use strict' when javascript is intrepreted to use a more modern intrepretation of javascript
    // basic scope properties
    $scope.greeting = 'Hello';

    $scope.person = {
        firstName: 'Dan',
        lastName: 'Johnson'
    };

    // update scope properties using $watch
    var redFruits = ['apple', 'cherry', 'strawberry'];
    var greenFruits = ['kiwi', 'avocado', 'honeydew'];

    $scope.favFruits = [];

// this watches for 'red' or 'green' and put out the array, and if it is anything other than red or green the array is empty.
    $scope.$watch('favColor', function(newValue, oldValue) {
    	switch (newValue) {
    		case 'red':
    			$scope.favFruits = redFruits;
    			break;

    		case 'green':
    			$scope.favFruits = greenFruits;
    			break;

    		default:
    			$scope.favFruits = [];
    			break;
    	}
    });
});

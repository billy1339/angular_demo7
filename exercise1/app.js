angular.module('Demo', []);

// main controller
angular.module('Demo').controller('mathCtrl', function($scope) {
    'use strict';
    // 'use strict' when javascript is intrepreted to use a more modern intrepretation of javascript
    // basic scope properties
    // $scope.num1 = "num1";
    // $scope.num2 = "num2";
    // var nums = ['num1', 'num2'];
    // $scope.answer = $scope.num1 + $scope.num2;
// this watches for 'red' or 'green' and put out the array, and if it is anything other than red or green the array is empty.
    // $scope.$watchGroup(nums, function(newValue, oldValue) {
    //   switch (newValue) {
    //     if ((typeof nums[0] === 'number')&& (typeof nums[1] === 'number')) {
    //       $scope.answer = $scope.num1 + $scope.num2;
    //     };

    //     default:
    //       $scope.answer = [];
    //       break;
    //   }
    // });


    var calc = function(newValue, oldValue) {
      if (!isNaN($scope.num1) && !isNaN($scope.num2)) {
        $scope.answer = $scope.num1 + $scope.num2
      } else {
        $scope.answer = "not a number!"
      }
    };
    $scope.$watchGroup(['num1', 'num2'], calc);

});

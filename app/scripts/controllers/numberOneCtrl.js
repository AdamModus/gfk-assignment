/* jshint browser: true */
'use strict';

angular.module('gfkApp')
   .controller('numberOneCtrl', ['$scope', '$timeout', function($scope, $timeout) {

      $scope.execNumberOne = function() {
         $timeout(function() {
            $scope.$apply(function() {
               var output = '';
               var str;
               for (var i = 1; i <= 100; i++) {
                  str = '';
                  if (i % 3 === 0) {
                     str += 'Bizz';
                  }
                  if (i % 5 === 0) {
                     str += 'Appz';
                  }
                  if (str === '') {
                     str += i;
                  }
                  output += str + '\n';
               }
               $scope.numberOneOutput = output;
            });
         });
      };
   }]);

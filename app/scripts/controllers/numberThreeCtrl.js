/* jshint browser: true */
'use strict';

angular.module('gfkApp')
   .controller('numberThreeCtrl', ['$scope', '$timeout', 'numberThreeFactory', function($scope, $timeout, numberThreeFactory) {

      numberThreeFactory.loadData(function() {
         $scope.companies = numberThreeFactory.listValues();
      });

   }]);

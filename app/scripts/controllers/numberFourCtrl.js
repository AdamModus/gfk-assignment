/* jshint browser: true */
'use strict';

angular.module('gfkApp')
   .controller('numberFourCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {

      $.ajax({
         url: '/api/numberFour/restServiceBase',
         type: 'GET',
         success: function(data) {
            console.log("Success");
         },
         error: function(data) {
            console.log('Failed!');
         },
      });

   }]);

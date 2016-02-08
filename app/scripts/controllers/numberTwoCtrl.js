/* jshint browser: true */
'use strict';

angular.module('gfkApp')
   .controller('numberTwoCtrl', ['$scope', '$timeout', function($scope, $timeout) {

      function Feline() {
         this.purr = function() {
            return 'purrrrr';
         };
      }

      function Leopard() {
         this.roar = function() {
            return 'ROOOAAARRRRR';
         };
      }

      Leopard.prototype = new Feline();


      $scope.execNumberTwo = function() {
         $timeout(function() {
            $scope.$apply(function() {
               var leppy = new Leopard();
               var output = '';

               output += 'Is it a feline? ' + (leppy instanceof Feline ? 'yes :D' : 'oh no!') + '\n';
               output += 'Is it a leopard? ' + (leppy instanceof Leopard ? 'yes :3' : 'oh no!') + '\n';

               output += leppy.purr() + '\n';
               output += leppy.roar() + '\n';

               $scope.numberTwoOutput = output;
            });
         });
      };

   }]);

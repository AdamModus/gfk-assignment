'use strict';

angular.module('gfkApp').factory('numberThreeFactory', ['$http', '$q', function($http, $q) {

   var dataFolderUrl = 'http://0.0.0.0:8000/data/';
   var values = {};

   var promise = $q(function(resolve) {
      $http.get(dataFolderUrl + 'data.csv').success(function(response) {
         values = response.results;
         resolve(values);
      });
   });

   //creating the factory instance and adding it's public functions
   var factory = {};
   factory.loadData = function(callback) {
      promise.then(callback);
   };

   factory.listValues = function() {
      return values;
   };
   //factory instance is over

   //returning the factory reference
   return factory;
}]);

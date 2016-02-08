'use strict';

angular.module('gfkApp', [
   'ui.router',
]).config(function($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/');

   //controller and view assignment
   $stateProvider.state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'mainCtrl'
   }).state('main.numberOne', {
      url: '/numberOne',
      templateUrl: 'views/numberOne.html',
      controller: 'numberOneCtrl'
   }).state('main.numberTwo', {
      url: '/numberTwo',
      templateUrl: '/views/numberTwo.html',
      controller: 'numberTwoCtrl'
   }).state('main.numberThree', {
      url: '/numberThree',
      templateUrl: '/views/numberThree.html',
      controller: 'numberThreeCtrl'
   }).state('main.numberFour', {
      url: '/numberFour',
      templateUrl: '/views/numberFour.html',
      controller: 'numberFourCtrl'
   });
});

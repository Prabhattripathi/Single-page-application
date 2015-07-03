var myApp = angular.module('myApp', [
  'ngRoute'
]);
myApp.config(function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  }).when('/about', {
    templateUrl: 'pages/about.html',
    controller: 'secondController'
  }).when('/developer', {
    templateUrl: 'pages/developer.html',
    controller: 'thirdController'
  }).when('/products', {
    templateUrl: 'pages/products.html',
    controller: 'fourthController'
  })
});
myApp.controller('mainController', [
  '$scope',
  '$log',
  function ($scope, $log) {
  }
]);
myApp.controller('secondController', [
  '$scope',
  '$log',
  function ($scope, $log) {
  }
]);

myApp.controller('thirdController', [
  '$scope',
  '$log',
  function ($scope, $log) {
  }
]);


myApp.controller('fourthController', [
  '$scope',
  '$log',
  function ($scope, $log) {
  }
]);


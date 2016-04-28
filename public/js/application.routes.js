
angular.module('login').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : 'js/login-module/views/auth.view.html',
      controller : 'authController'
    })
    .otherwise({
      redirectTo : '/',
      controller : 'mainController'
    });
  }
]);

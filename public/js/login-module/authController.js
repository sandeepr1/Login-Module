angular.module('login').controller('authController', ['$scope','$cookies','$rootScope', '$window','$http','$location',
  function($scope,$cookies,$rootScope, $window,$http,$location ) {


$scope.login=function(){

  if($scope.password===$scope.confirmPwd){
    $scope.user={
      username:$scope.username,
      password:$scope.password
    };
    $scope.loginMessage='';
    $http.post('/login',$scope.user).then(function success(response){console.log("iside success");},function(response){console.log("error inside");})
  }
  else{
    $scope.loginMessage="Password and Confirm Password Doesn't match";
  }
}




}]);

angular.module("ecommerce")
  .controller("signupCtrl", function($scope, signupServ) {

$scope.user = {};

  $scope.newUser = function(user) {
    signupServ.newUser(user).then
  }

});

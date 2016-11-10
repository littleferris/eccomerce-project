angular.module("ecommerce")
  .controller("signupCtrl", function($scope, signupServ) {

$scope.user = {};

  $scope.newUser = function(user) {
    signupServ.newUser(user).then
  }


  $scope.formValidation = function(user) {
    signupServ.formValidation(user).then
  }

});

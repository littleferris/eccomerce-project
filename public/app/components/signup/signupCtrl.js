angular.module("ecommerce")
  .controller("signupCtrl", function($scope, signupServ,$location) {

$scope.user = {};

  $scope.executeNewUser = function(user) {
    signupServ.executeNewUser(user);

  }

});

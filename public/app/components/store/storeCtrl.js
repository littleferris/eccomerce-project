angular.module("ecommerce").controller("storeCtrl",
function($scope, storeServ) {

  $scope.getProducts = function () {
    storeServ.getProducts().then(function( response ) {
      console.log( response );
      console.log( 'Hello World' );


      $scope.products = response;
    })
  }

  $scope.getProducts();

});

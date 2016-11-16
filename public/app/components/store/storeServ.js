angular.module("ecommerce").service("storeServ",
function($http, $q) {



  this.getProducts = function () {
    var deferred = $q.defer();

    return $http.get('/products')
    .then(function( response ) {
      var products = response.data;
      var prouctName = products.map(function(product, i) {
        console.log( products )

      })
      return products;
    });
  }




});

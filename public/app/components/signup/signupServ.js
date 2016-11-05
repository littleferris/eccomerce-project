// INITILIZE SERVICE
// ============================================================
angular.module("ecommerce")
  .service("signupServ", function($http, $q) {
  // CRUD FUNCTIONS
  // ============================================================
  // this.getCollection = function(id) {
  //   var query = "";
  //   if (id) query = '?_id=' + id;
  //   return $http({
  //     method: 'GET',
  //     url: '/collection' + query
  //   }).then(function(response) {
  //     if (response.data.length < 2) return response.data[0];
  //     return response.data;
  //   });
  // };
  this.newUser = function(user) {
    console.log("this was clicked");
    console.log(user);
    return $http({
      method: 'POST',
      url: '/newUser',
      data: user
    }).then(function(response) {
      return response;
    });
  };

});

angular.module( 'ecommerce' )
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl:"./app/components/home/signin.html"
      })

      .state('signup', {
        url:'/signup',
        templateUrl:"./app/components/signup/signup.html",
        controller: 'signupCtrl'
      })

      .state('store', {
        url:'/store',
        templateUrl:"./app/components/store/store.html"
        // controller: 'storeCtrl'
      })

      .state('cart', {
        url:'/cart',
        templateUrl:"./app/components/cart/cart.html"
        // controller: 'cartCtrl'
      })



      $urlRouterProvider
        .otherwise('/');

  });

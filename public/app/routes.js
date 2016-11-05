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
      });


      $urlRouterProvider
        .otherwise('/');

  });

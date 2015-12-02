(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, spaceConfig /*,$locationProvider*/) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'reg'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'lg'
      })
      .state('crud', {
        url: '/crud',
        templateUrl: 'app/crud/crud.html',
        controller: 'CrudController',
        controllerAs: 'crud',
        data: {
          permissions: {
            only: [spaceConfig.ROLE_PLAYER],
            redirectTo: 'login'
          }
        }
      });

    // Enable html5mode
    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  }

})();

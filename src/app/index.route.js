(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider /*,$locationProvider*/) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('crud', {
        url: '/crud',
        templateUrl: 'app/crud/crud.html',
        controller: 'CrudController',
        controllerAs: 'crud'
      });

    // Enable html5mode
    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
  }

})();

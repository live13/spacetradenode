(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
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
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

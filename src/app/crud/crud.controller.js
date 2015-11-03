(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .controller('CrudController', CrudController);

  /** @ngInject */
  function CrudController($log,crudServ) {
    var vm = this;
    crudServ.query(function(result){
      $log.debug(result);
    });

  }
})();

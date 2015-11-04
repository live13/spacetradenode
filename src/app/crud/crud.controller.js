(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .controller('CrudController', CrudController);

  /** @ngInject */
  function CrudController($log,crudServ) {
    var vm = this;
    vm.create = createGood;
    vm.update = updateGood;
    vm.delete = deleteGood;
    vm.newgood = {};
    vm.goods = [];

    crudServ.query(function(result){
      $log.debug(result);
      vm.goods = result;
    });

    function createGood(newgood){
      $log.debug(newgood);
      crudServ.save(newgood,function(result){
        $log.debug(result);
      });
    }

    function updateGood(newgood){
      crudServ.create({id:newgood.id},newgood,function(result){
        $log.debug(result);
      });
    }

    function deleteGood(newgood){
      crudServ.delete({id:newgood.id},function(result){
        $log.debug(result);
      });
    }

  }
})();

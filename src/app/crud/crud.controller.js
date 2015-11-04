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
    vm.searchGood = searchById;
    vm.newgood = {};
    vm.goods = [];
    vm.searchId = 0;
    vm.found = [];

    crudServ.query(function(result){
      $log.debug(result);
      vm.goods = result;
    });

    function createGood(newgood){
      $log.debug(newgood);
      crudServ.save(newgood,function(result){
        vm.goods.push(result);
        vm.newgood.title = '';
        vm.newgood.price = 0;
      });
    }

    function updateGood(newgood){
      crudServ.update({id:newgood.id},newgood,function(result){
        $log.debug(result);
      });
    }

    function deleteGood(newgood){
      crudServ.delete({id:newgood.id},function(result){
        vm.goods = vm.goods.filter(function(el){
          return el.id != newgood.id;
        });
        $log.debug(result);
      });
    }

    function searchById(id){
      crudServ.get({id: id},function(result){
        if(result)
          vm.found = result;
        $log.debug(result);
      });
    }

  }
})();

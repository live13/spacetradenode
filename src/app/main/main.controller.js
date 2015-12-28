(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .controller('MainController', mainController);

  /** @ngInject */
  function mainController($log, shangeStateServ) {
    var vm = this;
    vm.tologin = tologin;
    vm.toreg = toreg;

    function tologin(){
      shangeStateServ.tologin();
    }

    function toreg(){
      shangeStateServ.toreg();
    }
  }
})();

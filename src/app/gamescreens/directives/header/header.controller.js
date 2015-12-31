(function() {
  'use strict';

  angular
      .module('spacetradenode')
      .controller('HeaderController', headerController);

  /** @ngInject */
  function headerController($log, shangeStateServ) {
    var vm = this;
    vm.logout = logout;
    vm.map = {};
    $log.debug('header');

    function logout(){
      shangeStateServ.logout();
    }
  }
})();

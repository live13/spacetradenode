(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .controller('StatusController', statusController);

  /** @ngInject */
  function statusController($log) {
    var vm = this;
    vm.user = {};
    $log.debug('status');
  }
})();

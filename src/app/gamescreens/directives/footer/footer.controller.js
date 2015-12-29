(function() {
  'use strict';

  angular
      .module('spacetradenode')
      .controller('footerCtrl', footerController);

  /** @ngInject */
  function footerController($log) {
    var vm = this;
    vm.map = {};
    $log.debug('footer');
  }
})();

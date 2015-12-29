(function() {
  'use strict';

  angular
      .module('spacetradenode')
      .controller('HeaderController', headerController);

  /** @ngInject */
  function headerController($log) {
    var vm = this;
    vm.map = {};
    $log.debug('header');
  }
})();

(function() {
  'use strict';

  angular
      .module('spacetradenode')
      .controller('headerCtrl', headerController);

  /** @ngInject */
  function headerController($log) {
    var vm = this;
    vm.map = {};
    $log.debug('header');
  }
})();

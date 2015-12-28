(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .controller('MapController', mapController);

  /** @ngInject */
  function mapController($log) {
    var vm = this;
    vm.map = {};
    $log.debug('map');
  }
})();

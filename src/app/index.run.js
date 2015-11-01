(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

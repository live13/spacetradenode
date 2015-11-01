(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();

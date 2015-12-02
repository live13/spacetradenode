(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, Permission,spaceConfig,loginServ) {

    Permission.defineRole(spaceConfig.ROLE_ANONYMOUS, function() {
      return true;
    });
    Permission.defineRole(spaceConfig.ROLE_PLAYER, function() {
      var loged = loginServ.logedIn();
      return loged;
    });
    $log.debug('runBlock end');
  }

})();

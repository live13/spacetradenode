(function() {
  'use strict';

  angular
    .module('spacetradenode')
    .controller('MainController', mainController);

  /** @ngInject */
  function mainController($log, $state, loginServ) {
    var vm = this;
    vm.logout = logout;

    function logout(){
      $log.debug('login');
      loginServ.logout()
          .then(function(result){
            $log.debug(result);
            $state.go('login');
          })
          .catch(function(result){
            $log.debug(result);
          });
    }
  }
})();

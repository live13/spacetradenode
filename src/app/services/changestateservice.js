(function() {
  'use strict';

  angular
      .module('spacetradenode')
      .factory('shangeStateServ', shangeStateServ);
    function shangeStateServ($log, $state, loginServ) {

    return {
      logout: logout,
      tologin: tologin,
      toreg: toreg
    };

    function logout(){
      $log.debug('logout');
      loginServ.logout()
          .then(function(result){
            $log.debug(result);
            $state.go('login');
          })
          .catch(function(result){
            $log.debug(result);
          });
    }

    function tologin(){
      $state.go('login');
    }

    function toreg(){
      $state.go('register');
    }

  }
})();
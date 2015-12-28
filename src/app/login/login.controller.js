(function() {
	'use strict';

	angular
			.module('spacetradenode')
			.controller('LoginController', loginController);

	/** @ngInject */
	function loginController($log, $state, loginServ) {
		var vm = this;
		vm.login = login;

		$log.debug('login controller');

		function login(){
			$log.debug('login');
			loginServ.login({'username': vm.name,'password': vm.pass})
			.then(function(result){
				$log.debug(result);
				$state.go('status');
			})
			.catch(function(result){
				$log.debug(result);
			});
		}

	}
})();

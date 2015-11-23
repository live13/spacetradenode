(function() {
	'use strict';

	angular
			.module('spacetradenode')
			.controller('RegisterController', registerController);

	/** @ngInject */
	function registerController($log,registerServ) {
		var vm = this;
		vm.register = register;

		$log.debug('register controller');

		function register(){
			$log.debug('register');
			registerServ.register({'name': vm.name,'pass': vm.pass, 'email': vm.email})
			.then(function(result){
				$log.debug(result);
			})
			.catch(function(result){
				$log.debug(result);
			});
		}

	}
})();
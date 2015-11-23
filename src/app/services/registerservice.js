(function() {
	'use strict';

	angular
			.module('spacetradenode')
			.factory('registerServ', registerServ);
			function registerServ($http, $httpParamSerializer) {

				return {
					register: register
				};

				function register(client) {
					return $http({
						method: 'POST',
						url: '/api/register',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						data: $httpParamSerializer(client)
					});
				}

			}
})();
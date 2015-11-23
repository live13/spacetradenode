(function() {
	'use strict';

	angular
			.module('spacetradenode')
			.factory('loginServ', loginServ);
			function loginServ($http, $httpParamSerializer) {

				return {
					login: login
				};

				function login(client) {
					return $http({
						method: 'POST',
						url: '/api/login',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						data: $httpParamSerializer(client)
					});
				}

			}
})();
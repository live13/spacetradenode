(function() {
	'use strict';

	angular
			.module('spacetradenode')
			.factory('loginServ', loginServ);
			function loginServ($log, $http, $httpParamSerializer,$cookies) {

				return {
					login: login,
					logout: logout,
					logedIn: logedIn
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

				function logout() {
					return $http({
						method: 'GET',
						url: '/api/login/logout',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					});
				}

				function logedIn() {
					var user = $cookies.get('user');
					$log.debug(user);
					if(user)
						return true;
					return false;
				}
			}
})();
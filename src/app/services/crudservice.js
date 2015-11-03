(function() {
	'use strict';

	angular
			.module('spacetradenode')
			.factory('crudServ', crudFunc);

	function crudFunc($resource) {
		return $resource('/api/goods/:id', null,
				{
					'update': { method:'PUT' }
				});
	}

})();

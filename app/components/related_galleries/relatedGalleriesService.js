(function() {
	'use strict';
	angular.module('overlayApp').factory('RelatedGalleries', ['$http', function ($http) {
		function get (url) {
			return $http({
				method: 'GET',
				url: url
			});
		}
		return {
			get: get
		};
	}]);
})();
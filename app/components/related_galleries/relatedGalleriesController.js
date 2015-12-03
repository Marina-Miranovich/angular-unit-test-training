(function  () {
	'use strict';
	angular.module('overlayApp').controller('relatedGalleriesController',
	['$scope', 'RelatedGalleries', function($scope, RelatedGalleries) {
		$scope.tag = '';
		$scope.items = [];

		RelatedGalleries.get($scope.url).then(function (result) {
			var tags = result.data.response.info.tags_display;

			$scope.items = result.data.response.docs;
			for (var key in tags) {
				$scope.tag += tags[key].display;
			}
		});
	}]);
})();
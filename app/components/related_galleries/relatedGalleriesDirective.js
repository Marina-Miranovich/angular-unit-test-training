(function() {
	'use strict';
	angular.module('overlayApp').directive('relatedGalleries', function () {
		return {
			restrict: 'E',
			controller: 'relatedGalleriesController',
			templateUrl: 'app/components/related_galleries/relatedGalleries.tpl.html',
			replace: true,
			scope: {
				url: '=galleriesUrl'
			},
			link: function () {} 
		};
	});
})();
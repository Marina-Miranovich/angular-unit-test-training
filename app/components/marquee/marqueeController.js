(function () {
	'use strict';

	angular.module('overlayApp').controller('marqueeCtrl',
	[function () {
		this.galleriesUrl = 'http://stg2.releng.foxsports.com/api/v2/content?userexp=relevantRelated&source=%22http://www.foxsports.com/mlb/lists/new-york-mets-top-ten-players-in-2015-rankings-by-wins-above-replacement-102715%22&tags=baseball-mlb-league-1&p=url:*/lists/*,url:*/photos/*,*/galley/*&op=OR';

		this.showRelated = function () {

		};

	}]);
})()
var IllspotsApp = angular.module('IllspotsApp', [
	'ngRoute',
	'IllspotsAnimations',
	'postControllers',
	'placeControllers'
]);

IllspotsApp.config(['$routeProvider',
	function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/app/partials/index.html',
			controller: 'PostListCtrl'
		})
		.when('/search/', {
        	templateUrl: 'js/app/partials/search-list.html',
        	// controller: 'PlaceListCtrl'
      	})
      	.when('/contact', {
        	templateUrl: 'js/app/partials/contact.html'

      	})
		.otherwise({
			redirectTo: '/'
		});
}]);


IllspotsApp.controller('AppCtrl', ['$scope', '$timeout', '$window', function ($scope, $timeout, $window) {

	$scope.isPhone = function () {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 
	}
	
	$scope.ui = {
		direction: 'right'
	};

	$scope.$on('$routeChangeSuccess', function (event, next, current) { 
   		
   		if ($window.location.hash == '#/') {   			
   			$scope.ui.direction = 'right';
			$scope.ui.back = false;
		} else {
			$scope.ui.back = true;
		}

   		$scope.back = function () {
   			$scope.ui.direction = 'left';
   			$window.history.back();
   		}
 	});
}]);

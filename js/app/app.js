var IllspotsApp = angular.module('IllspotsApp', [
	'ngRoute',
	'IllspotsAnimations',
	'postControllers',
	'placeControllers',
	'menuServices'
]);

IllspotsApp.config(['$routeProvider',
	function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/app/partials/index.html',
			controller: 'PostListCtrl'
		})
		.when('/search/', {
        	templateUrl: 'js/app/partials/place-list.html',
        	// controller: 'PlaceListCtrl'
      	})
      	.when('/spot/', {
        	templateUrl: 'js/app/partials/place-detail.html',
        	// controller: 'PlaceListCtrl'
      	})
      	.when('/contact', {
        	templateUrl: 'js/app/partials/contact.html'

      	})
		.otherwise({
			redirectTo: '/'
		});
}]);


IllspotsApp.controller('AppCtrl', ['$scope', '$window', 'Menu', function ($scope, $window, Menu) {

	$scope.Menu = Menu;

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

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


IllspotsApp.directive('scrolly', function () {

    return function (scope, element, attrs) {

        var raw = element[0];

        element.bind('scroll', function () {
            if (raw.scrollTop > 50) {
                scope.slideshowSize = 'small';
            } else {
                scope.slideshowSize = 'big';
            }
            scope.$apply();
        });
    };

});


IllspotsApp.controller('AppCtrl', ['$rootScope', '$scope', '$window', 'Menu', function ($rootScope, $scope, $window, Menu) {

	$scope.Menu = Menu;

    $rootScope.slide = '';
    $rootScope.$on('$routeChangeSuccess', function() {

        if ($window.location.hash == '#/' || $window.location.hash == '') {
            $rootScope.btnBack = false;
        } else {
            $rootScope.btnBack = true;
        }

        //event button to move backward
        $rootScope.back = function() {
            $rootScope.slide = 'left';
            $window.history.back();
        }
        //event button item list to move forward
        $rootScope.next = function() {
            $rootScope.slide = 'right';
        }
	});

}]);

var placeControllers = angular.module('placeControllers', []);


placeControllers.controller('PlaceListCtrl', ['$scope', function ($scope) {

	$scope.places = [
	    {
            id: 1,
            name: 'Skate park de Triveaux',
            rate: 12,
            distance: 3.2,
            city: 'Arcueil',
	        counterCheckin: 43,
	        counterLikes: 112,
	        liked: true,
	        checked: false
	    },
	    {
            id: 1,
            name: 'Skate park de Triveaux',
            rate: 12,
            distance: 3.2,
            city: 'Arcueil',
	        counterCheckin: 4,
	        counterLikes: 1,
	        liked: true,
	        checked: true
	    }
	];
    console.log('PlaceListCtrl');

}]);


placeControllers.controller('PlaceDetailCtrl', ['$scope', function ($scope) {

	$scope.place = [];
    console.log('PlaceDetailCtrl');

}]);

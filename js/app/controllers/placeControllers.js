var placeControllers = angular.module('placeControllers', []);


placeControllers.controller('PlaceListCtrl', ['$scope', 'Menu', function ($scope, Menu) {

	// change Menu
	Menu.setText('Map');
	Menu.setIcon('glyphicon glyphicon-map-marker');
	Menu.setUrl('#/spot/');

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


}]);


placeControllers.controller('PlaceDetailCtrl', ['$scope', function ($scope) {

	$scope.place = [];
    console.log('PlaceDetailCtrl');

}]);


placeControllers.controller('PlaceFilterCtrl', ['$scope', function ($scope) {

	$scope.place = [];
    console.log('PlaceFilterCtrl');

}]);

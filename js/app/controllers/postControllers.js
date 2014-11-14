var postControllers = angular.module('postControllers', []);


postControllers.controller('PostListCtrl', ['$scope', 'Menu', function ($scope, Menu) {

    // Change menu
    Menu.setText('Rechercher');
    Menu.setIcon('glyphicon glyphicon-search');
    Menu.setUrl('#/search/');

    $scope.posts = [
        {
            id: 1,
            author: {
                id: 1,
                name: 'Benjamin de Vaublanc',
                picture: 'profil.png'
            },
            date: '04/11/2014',
            place: {
                id: 1,
                name: 'Skate park de Triveaux',
                rate: 12,
                distance: 3.2,
                city: 'Meudon'
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
            counterComments: 4,
            counterLikes: 1,
            liked: true

        },
        {
            id: 2,
            author: {
                id: 2,
                name: 'Kevin Kuipers',
                picture: 'profil.png'
            },
            date: '04/11/2014',
            place: {
                id: 1,
                name: 'Skate park de Triveaux',
                rate: 12,
                distance: 3.2,
                city: 'Meudon'
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
            counterComments: 4,
            counterLikes: 1,
            liked: false
        }
    ];

}]);

var postControllers = angular.module('postControllers', []);


postControllers.controller('PostListCtrl', ['$scope', function ($scope) {

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
            counterLikes: 1

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
        },
        {
            id: 3,
            author: {
                id: 4,
                name: 'Jonathan Jourde',
                picture: 'profil.png'
            },
            date: '04/11/2014',
            place: {
                id: 5,
                name: 'Flesh and Bones',
                rate: 1,
                distance: 10,
                city: 'Paris'
            },
            description: 'hey! Dude !!',
            counterComments: 1,
            counterLikes: 12

        },
        {
            id: 3,
            author: {
                id: 4,
                name: 'Jonathan Jourde',
                picture: 'profil.png'
            },
            date: '04/11/2014',
            place: {
                id: 5,
                name: 'Flesh and Bones',
                rate: 1,
                distance: 10,
                city: 'Paris'
            },
            description: 'hey! Dude !!',
            counterComments: 1,
            counterLikes: 12

        },
        {
            id: 3,
            author: {
                id: 4,
                name: 'Jonathan Jourde',
                picture: 'profil.png'
            },
            date: '04/11/2014',
            place: {
                id: 5,
                name: 'Flesh and Bones',
                rate: 1,
                distance: 10,
                city: 'Paris'
            },
            description: 'hey! Dude !!',
            counterComments: 1,
            counterLikes: 12

        },
        {
            id: 3,
            author: {
                id: 4,
                name: 'Jonathan Jourde',
                picture: 'profil.png'
            },
            date: '04/11/2014',
            place: {
                id: 5,
                name: 'Flesh and Bones',
                rate: 1,
                distance: 10,
                city: 'Paris'
            },
            description: 'hey! Dude !!',
            counterComments: 1,
            counterLikes: 12

        }
    ];

}]);

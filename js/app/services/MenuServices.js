var menuServices = angular.module('menuServices', []);

menuServices.factory('Menu', [function () {

    // default settings
    var text = 'home',
        icon = 'glyphicon glyphicon-search';
        url  = '#/'

    var factory = {

        isOpen: false,

        getText: function() {
            return text;
        },

        getIcon: function () {
            return icon;
        },

        getUrl: function () {
            return url;
        },

        setText: function (newText) {
            text = newText;
        },

        setIcon: function (newIcon) {
            icon = newIcon;
        },

        setUrl: function (newUrl) {
            url = newUrl;
        },

        toggle: function () {
            this.isOpen = this.isOpen ? this.isOpen = false : true;
        },

        open: function () {
            this.isOpen = true;
        },

        close: function () {
            this.isOpen = false;
        }


    };

	return factory;
}]);
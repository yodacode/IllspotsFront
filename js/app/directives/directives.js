IllspotsApp.directive('scrolly', function () {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var raw = element[0];

            element.bind('scroll', function () {
                if (raw.scrollTop > 50) {
                    scope.slideshowSize = 'small';
                } else {
                    scope.slideshowSize = 'big';
                }
                scope.$apply();
            });
        }
    };
});
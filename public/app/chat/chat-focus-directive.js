(function() {
    'use strict';

    define([], function() {
        var focusChat = function() {
            var cssOptions = {
                'transition': 'all 0.5s ease',
                'bottom': '-30px'
            };
            return {
                restrict: 'A',
                link: function ($scope, element, attrs) {
                    element.bind('focus', function () {
                        element.parent().css(cssOptions);
                    });
                    element.bind('blur', function() {
                        element.parent().css(cssOptions);
                    });
                    element.bind('hover', function() {
                        element.parent().css(cssOptions);
                    })
                }
            }
        };

        return [focusChat];
    });
}());
(function() {
    'use strict';

    define([], function() {
        var focusChat = function() {
            return {
                restrict: 'A',
                link: function ($scope, element, attrs) {
                    element.bind('focus', function () {
                        element.parent().css({
                            'transition': 'all 0.5s ease',
                            'bottom': '0'
                        });
                    });
                    element.bind('blur', function() {
                        element.parent().css({
                            'transition': 'all 0.5s ease',
                            'bottom': '-30px'
                        });
                    });
                }
            }
        };

        return [focusChat];
    });
}());
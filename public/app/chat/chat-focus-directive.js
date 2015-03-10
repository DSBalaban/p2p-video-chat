(function() {
    'use strict';

    define([], function() {
        var focusChat = function() {
            return {
                restrict: 'A',
                link: function ($scope, element, attrs) {
                    var focused = false;
                    element.bind('focus', function () {
                        focused = true;
                        element.parent().css({
                            'transition': 'all 0.5s ease',
                            'bottom': '0'
                        });
                    });
                    element.bind('mouseenter', function() {
                        if(!focused) {
                            element.parent().css({
                                'transition': 'all 0.5s ease',
                                'bottom': '0'
                            });
                        }
                    });
                    element.bind('mouseleave', function() {
                        if(!focused) {
                            element.parent().css({
                                'transition': 'all 0.5s ease',
                                'bottom': '-30px'
                            });
                        }
                    });
                    element.bind('blur', function() {
                        focused = false;
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
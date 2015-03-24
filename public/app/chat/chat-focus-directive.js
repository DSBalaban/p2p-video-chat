(function() {
    'use strict';

    /*
        Directive that makes target element respond to user events such as hover, focus and blur (opposite of focus)
        Currently applied to chat input element, named chatForm, inside partial-chat.html
     */
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
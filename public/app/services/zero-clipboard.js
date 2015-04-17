(function() {
    'use strict';

    define(['zero-clipboard'], function(ZeroClipboardService) {
        var clipboard = function() {
            return ZeroClipboardService;
        };

        return [clipboard];
    });
}());
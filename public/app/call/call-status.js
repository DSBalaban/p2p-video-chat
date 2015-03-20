(function() {
    'use strict';

    define([], function() {
        var callStatus = function() {
            this.webcamAllowed = false;
            this.active = false;
        };

        return [callStatus];
    });
}());
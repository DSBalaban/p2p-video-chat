(function() {
    'use strict';

    /*
        Singleton that provides the app with knowledge of camera permissions and call status.
     */
    define([], function() {
        var callStatus = function() {
            this.webcamAllowed = false;
            this.active = false;
        };
        return [callStatus];
    });
}());
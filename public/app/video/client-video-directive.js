(function() {
    'use strict';

    /*
        Template directive applied to video container
     */
    define([], function() {
        var mainVideoDirective = function() {
            var template = require.toUrl('video/video-template.html');
            return {
                restrict: 'A',
                templateUrl: template
            }
        };
        return [mainVideoDirective];
    })
}());
(function() {
    'use strict';

    /*
        Controller responsible for calling via link
     */
    define([], function() {
        var videoCall = function($state, $stateParams, $scope) {
            $scope.$parent.call($stateParams.id);
        };
        return ['$state', '$stateParams', '$scope', videoCall];
    });
}());
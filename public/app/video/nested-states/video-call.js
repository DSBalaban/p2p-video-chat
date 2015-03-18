(function() {
    'use strict';

    define([], function() {
        var videoCall = function($state, $stateParams, $scope) {
            $scope.$parent.call($stateParams.id);
            $state.go('video');
        };

        return ['$state', '$stateParams', '$scope', videoCall];
    });
}());
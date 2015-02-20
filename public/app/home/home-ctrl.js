(function() {
    'use strict';

    define([], function() {
        var homeCtrl = function($scope, ChatBubble) {

            ChatBubble.hi();
            $scope.data = 1;
        };

        return ['$scope', 'ChatBubble', homeCtrl];
    });
}());
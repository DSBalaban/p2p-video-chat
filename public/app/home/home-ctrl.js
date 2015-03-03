(function() {
    'use strict';

    define([], function() {
        var homeCtrl = function($scope, ChatBubble, $stateParams) {
            console.log($stateParams.id);
            ChatBubble.hi();
            $scope.data = 1;
        };

        return ['$scope', 'ChatBubble', '$stateParams', homeCtrl];
    });
}());
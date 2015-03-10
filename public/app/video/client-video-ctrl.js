(function() {

    'use strict';

    define([], function() {

        var clientVideoCtrl = function($scope, $state, PeerMediaConn, PeerDataConn, ChatCache) {

            $scope.call = function(id) {
                if(id !== undefined && /^[a-zA-Z0-9]{16}$/.test(id)) {
                    PeerMediaConn.call(id);
                    PeerDataConn.connect(id);
                }else {
                    console.log("ID is undefined OR isn't 16 alphanumerical characters long.");
                }
            };
            $scope.$on('chat update', function(event, message) {
                if(!$state.includes('video.chat')) {
                    ChatCache.addChatEntry({
                        message: message,
                        sender: 'them'
                    });
                }
            });
        };

        return ['$scope', '$state', 'PeerMediaConn', 'PeerDataConn', 'ChatCache', clientVideoCtrl];
    })
}());
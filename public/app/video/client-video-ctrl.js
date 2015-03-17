(function() {

    'use strict';

    define([], function() {

        var clientVideoCtrl = function($scope, $state, WebcamStatus, PeerMediaConn, PeerDataConn, ChatCache,
                                       HumaneNotifier) {

            $scope.call = function(id) {
                if(WebcamStatus.allowed) {
                    if(id !== undefined && /^[a-zA-Z0-9]{16}$/.test(id)) {
                        PeerMediaConn.call(id);
                        PeerDataConn.connect(id);
                    }else {
                        HumaneNotifier.error("ID is undefined OR isn't 16 alphanumerical characters long.");
                    }
                }else {
                    HumaneNotifier.error("Give the app access to your webcam before calling.");
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

        return ['$scope', '$state', 'WebcamStatus', 'PeerMediaConn', 'PeerDataConn', 'ChatCache',
            'HumaneNotifier', clientVideoCtrl];
    })
}());
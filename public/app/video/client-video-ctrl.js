(function() {

    'use strict';

    define([], function() {

        var clientVideoCtrl = function($scope, $state, CallStatus, PeerMediaConn, PeerDataConn, ChatCache,
                                       HumaneNotifier, $timeout) {

            $scope.callStatus = CallStatus;
            $scope.call = function(id) {
                if(CallStatus.webcamAllowed) {
                    if(id !== undefined && /^[a-zA-Z0-9]{16}$/.test(id)) {
                        PeerDataConn.connect(id);
                        PeerMediaConn.call(id);
                    }else {
                        HumaneNotifier.error("ID is undefined OR isn't 16 alphanumerical characters long.");
                    }
                }else {
                    HumaneNotifier.error("Give the app access to your call before calling.");
                }
            };
            $scope.hangUp = function() {
                PeerMediaConn.close();
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

        return ['$scope', '$state', 'CallStatus', 'PeerMediaConn', 'PeerDataConn', 'ChatCache',
            'HumaneNotifier', '$timeout', clientVideoCtrl];
    });
}());
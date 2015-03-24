(function() {

    'use strict';

    /*
        Main controller
        Responsible for:
            - calling (indirectly)
            - ending calls
            - updating chat accordingly
            -
     */
    define([], function() {
        var clientVideoCtrl = function($scope, $state, CallStatus, PeerMediaConn, PeerDataConn, ChatCache,
                                       HumaneNotifier) {

            $scope.callStatus = CallStatus;
            $scope.call = function(id) {
                $scope.id = id;
                if(CallStatus.webcamAllowed) {
                    if(id !== undefined && /^[a-zA-Z0-9]{16}$/.test(id)) {
                        PeerDataConn.connect(id);
                        PeerMediaConn.call(id);
                    }else {
                        HumaneNotifier.error("ID is undefined OR isn't 16 alphanumerical characters long.");
                    }
                }else {
                    $state.go('video.hold');
                }
            };
            $scope.hangUp = function() {
                PeerMediaConn.close();
            };
        };

        return ['$scope', '$state', 'CallStatus', 'PeerMediaConn', 'PeerDataConn', 'ChatCache',
            'HumaneNotifier', clientVideoCtrl];
    });
}());
(function() {
    'use strict';

    define([], function() {
        var confirmCall = function($scope, $modal, CallStatus, PeerMediaConn, $state) {
            var scope = $scope;
            $scope.cameraStatus = CallStatus;

            var confirmModal = $modal.open({
                templateUrl: 'app/call/allow-webcam.html',
                size: 'sm',
                scope: scope,
                backdrop: 'static'
            });

            confirmModal.result.then(
                function(acceptMessage) {
                    PeerMediaConn.answer();
                    $state.go('^');
                },
                function(rejectMessage) {
                    PeerMediaConn.close();
                    $state.go('^');
                }
            );

            $scope.answerCall = function() {
                confirmModal.close('accepted');

            };
            $scope.declineCall = function() {
                confirmModal.dismiss('not accepted');
            }
        };

        return ['$scope', '$modal', 'CallStatus', 'PeerMediaConn', '$state', confirmCall];
    });
}());
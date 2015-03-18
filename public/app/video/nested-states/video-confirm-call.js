(function() {
    'use strict';

    define([], function() {
        var confirmCall = function($scope, $modal, WebcamStatus, PeerMediaConn, $state) {
            var scope = $scope;
            $scope.cameraStatus = WebcamStatus;

            var confirmModal = $modal.open({
                templateUrl: 'app/webcam/allow-webcam.html',
                size: 'sm',
                scope: scope
            });

            confirmModal.result.then(
                function(acceptMessage) {
                    console.log(acceptMessage);
                    if(acceptMessage === 'accepted') {
                        PeerMediaConn.answer();
                        $state.go('video');
                    }

                },
                function(rejectMessage) {
                        console.log(rejectMessage);
                        PeerMediaConn.close();
                }
            );

            $scope.answerCall = function() {
                confirmModal.close('accepted');

            };
            $scope.declineCall = function() {
                confirmModal.dismiss('not accepted');
            }
        };

        return ['$scope', '$modal', 'WebcamStatus', 'PeerMediaConn', '$state', confirmCall];
    });
}());
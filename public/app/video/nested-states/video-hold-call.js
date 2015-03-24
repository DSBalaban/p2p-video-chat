(function() {
    'use strict';

    /*
        Permissions modal controller - responsible with allowing or preventing outgoing calls
     */
    define([], function() {
        var videoOnHold = function($scope, $modal, $timeout, $state, CallStatus, PeerMediaConn) {
            var scope = $scope;
            //modalActive will check if the modal has already been dismissed to prevent
            //timeout from executing
            var modalActive = true;
            $scope.cameraStatus = CallStatus;

            var allowMediaModal = $modal.open({
                templateUrl: 'app/call/allow-webcam-caller.html',
                size: 'sm',
                scope: scope,
                backdrop: 'static'
            });

            //Closes modal if no decision is taken after 15 seconds
            $timeout(function() {
                if(modalActive) {
                    allowMediaModal.dismiss();
                }
            }, 15000);

            allowMediaModal.result.then(
                function() {
                    PeerMediaConn.call($scope.id);
                    $state.go('video');
                },
                function() {
                    $state.go('video');
                }
            );

            $scope.answerCall = function() {
                modalActive = false;
                allowMediaModal.close();

            };
            $scope.declineCall = function() {
                modalActive = false;
                allowMediaModal.dismiss();
            }
        };

        return ['$scope', '$modal', '$timeout', '$state', 'CallStatus', 'PeerMediaConn', videoOnHold];
    });
}());
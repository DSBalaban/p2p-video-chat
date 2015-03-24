(function() {
    'use strict';
    /*
        Confirmation modal controller - sets modal settings, responsible for accepting or declining incoming calls
     */
    define([], function() {
        var confirmCall = function($scope, $modal, $state, $timeout, CallStatus, PeerMediaConn) {
            var scope = $scope;
            //modalActive will check if the modal has already been dismissed to prevent
            //timeout from executing
            var modalActive = true;
            $scope.cameraStatus = CallStatus;

            //$modal.open returns a promise
            var confirmModal = $modal.open({
                templateUrl: 'app/call/allow-webcam-callee.html',
                size: 'sm',
                scope: scope,
                backdrop: 'static'
            });

            //Closes modal if no decision is taken after 15 seconds
            $timeout(function() {
                if(modalActive) {
                    confirmModal.dismiss();
                }
            }, 10000);

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
                modalActive = false;
                confirmModal.close('accepted');

            };
            $scope.declineCall = function() {
                modalActive = false;
                confirmModal.dismiss('not accepted');
            }
        };

        return ['$scope', '$modal', '$state', '$timeout', 'CallStatus', 'PeerMediaConn', confirmCall];
    });
}());
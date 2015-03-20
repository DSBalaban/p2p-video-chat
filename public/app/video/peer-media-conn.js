(function() {

    'use strict';

    define([], function() {
        var PeerMediaConnection = function(PeerConn, CallStatus, $state, $rootScope) {
            var conversant, hangUpPressed = false;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            if(navigator.getUserMedia) {
                navigator.getUserMedia({audio: true, video: true},
                    function(stream) {
                        CallStatus.webcamAllowed = true;
                        document.getElementById('localVideo').setAttribute('src', URL.createObjectURL(stream));
                        window.localStream = stream;
                },  function(err) {
                        console.error(err);
                });
            }else {
                console.log("Your browser does not support P2P connections or they are disabled.");
            }

            PeerConn.on('open', function() {
                createConnectionLink(PeerConn.id);
                })
                .on('error', function(err){
                    console.error(err);
                })
                .on('call', function(call) {
                    conversant = call;
                    $state.go('video.confirm');
                });

            function connectCall(call) {
                var remoteVid = angular.element(document.querySelector('#remoteVideo'));
                CallStatus.active = true;
                call.on('stream', function(stream) {
                    remoteVid.attr('src', URL.createObjectURL(stream));
                    remoteVid.parent().removeClass('hide').addClass('text-left');
                    $state.go('video.chat');
                    })
                    .on('close', function() {
                        remoteVid.parent().addClass('hide').removeClass('text-left');
                        if(!hangUpPressed) {
                            $rootScope.$apply(function() {
                                CallStatus.active = false;
                            });
                        }
                    });

                window.onbeforeunload = function() {
                    call.destroy();
                };
            }

            function createConnectionLink(peerID) {
                var connectionUrl = document.location.href + '/' + peerID;
                var copyInput = angular.element(document.querySelector('#copyInput'));
                copyInput.attr('value', connectionUrl);
            }

            return {
                call: function(id) {
                    var call = PeerConn.call(id, window.localStream);
                    connectCall(call);
                },
                answer: function() {
                    if(!!conversant) {
                        conversant.answer(window.localStream);
                        connectCall(conversant);
                    }else {
                        console.error("No conversant calls to answer.");
                    }
                },
                close: function() {
                    hangUpPressed = true;
                    PeerConn._cleanup();
                    CallStatus.active = false;
                }
            }
        };
        return ['PeerConn', 'CallStatus', '$state', '$rootScope', PeerMediaConnection];
    });
}());
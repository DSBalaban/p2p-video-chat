(function() {

    'use strict';

    define([], function() {
        var PeerMediaConnection = function(PeerConn, WebcamStatus, $state) {
            var conversant;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            if(navigator.getUserMedia) {
                navigator.getUserMedia({audio: true, video: true},
                    function(stream) {
                        WebcamStatus.allowed = true;
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
                call.on('stream', function(stream) {
                    remoteVid.attr('src', URL.createObjectURL(stream));
                    remoteVid.parent().removeClass('hide').addClass('text-left');
                })
                    .on('close', function() {
                        remoteVid.parent().addClass('hide').removeClass('text-left');
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
                    }
                },
                close: function() {
                    if(!!conversant) {
                        /*THIS LEAVES WEBSOCKETS OPEN*/
                        PeerConn._cleanup();
                    }
                }
            }
        };
        return ['PeerConn', 'WebcamStatus', '$state', PeerMediaConnection];
    });
}());
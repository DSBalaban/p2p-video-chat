(function() {

    'use strict';

    /*
        Media Connection service, handles audio-video connection
     */
    define([], function() {
        var PeerMediaConnection = function(PeerConn, CallStatus, $state, $rootScope) {
            var conversant, hangUpPressed = false;
            var options = {
                'constraints': {
                    'mandatory': {
                        'OfferToReceiveAudio': true,
                        'OfferToReceiveVideo': true
                    }
                }
            };
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            //Requests media permissions
            if(navigator.getUserMedia) {
                navigator.getUserMedia({audio: true, video: true},
                    function(stream) {
                        //success callback, update CallStatus as necessary, set video stream
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

            //Call handler - used once per call either via .call(id) or .answer() methods
            function connectCall(call) {
                var remoteVid = angular.element(document.querySelector('#remoteVideo'));
                CallStatus.active = true;
                call.on('stream', function(stream) {
                        //If provided with a stream, attach stream to video, update view
                        remoteVid.attr('src', URL.createObjectURL(stream));
                        remoteVid.parent().removeClass('hide').addClass('text-left');
                        $state.go('video.chat');
                    })
                    .on('close', function() {
                        //Revert view to normal
                        remoteVid.parent().addClass('hide').removeClass('text-left');
                        if(!hangUpPressed) {
                            $rootScope.$apply(function() {
                                CallStatus.active = false;
                            });
                        }
                    });

                //End P2P connection, close peer websocket
                window.onbeforeunload = function() {
                    call.destroy();
                };
            }

            //Creates link others can use to make calls
            function createConnectionLink(peerID) {
                var connectionUrl = document.location.href + '/' + peerID;
                var copyInput = angular.element(document.querySelector('#copyInput'));
                copyInput.attr('value', connectionUrl);
            }

            return {
                call: function(id) {
                    var call = PeerConn.call(id, window.localStream, options);
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
                    //Ends connection between peers, notifying other party as well
                    //Does not destroy current session
                    PeerConn._cleanup();
                    CallStatus.active = false;
                }
            }
        };
        return ['PeerConn', 'CallStatus', '$state', '$rootScope', PeerMediaConnection];
    });
}());
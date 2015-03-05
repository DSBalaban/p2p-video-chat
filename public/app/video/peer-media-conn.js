(function() {

    'use strict';

    define([], function() {
        var PeerMediaConnection = function(PeerConn) {

            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            navigator.getUserMedia({audio: true, video: true}, function(stream) {
                document.getElementById('localVideo').setAttribute('src', URL.createObjectURL(stream));
                window.localStream = stream;
            }, function(err) {
                console.error(err);
            });

            PeerConn.on('open', function() {
                console.log(PeerConn.id);
                createConnectionLink(PeerConn.id);
            })
                .on('error', function(err){
                    console.error(err);
                })
                .on('call', function(call) {
                    call.answer(window.localStream);
                    connectCall(call);
                });

            function connectCall(call) {
                call.on('stream', function(stream) {
                    document.getElementById('remoteVideo').setAttribute('src', URL.createObjectURL(stream));
                });
            }

            function createConnectionLink(peerID) {
                var connectionUrl = document.location.href + '/' + peerID;
                var copyInput = angular.element(document.querySelector('#copyInput'));
                copyInput.attr('value', connectionUrl);
                console.log(connectionUrl);
            }

            return {
                call: function(id) {
                    var call = PeerConn.call(id, window.localStream);
                    connectCall(call);
                }
            }
        };
        return ['PeerConn', PeerMediaConnection];
    });
}());
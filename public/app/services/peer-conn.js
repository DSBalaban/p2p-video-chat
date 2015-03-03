(function() {

    'use strict';

    define(['peerjs'], function(Peer) {
        var PeerConnection = function() {

            var peer = new Peer({host: 'localhost', port: 9000, path: '/app', debug: 3,
                config: {'iceServers': [{ url: 'stun:stun.l.google.com:19302' }]}});

            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            navigator.getUserMedia({audio: true, video: true}, function(stream) {
                document.getElementById('localVideo').setAttribute('src', URL.createObjectURL(stream));
                window.localStream = stream;
            }, function(err) {
                console.error(err);
            });

            peer.on('open', function() {
                console.log(peer.id);
                createConnectionLink(peer.id);
            })
                .on('error', function(err){
                    console.error(err);
                })
                .on('call', function(call) {
                    call.answer(window.localStream);
                    handleCall(call);
                });

            function handleCall(call) {
                call.on('stream', function(stream) {
                    document.getElementById('remoteVideo').setAttribute('src', URL.createObjectURL(stream));
                });
            }

            function createConnectionLink(peerID) {
                var connectionUrl = document.location.origin + '/' + peerID;
                console.log(connectionUrl);
            }

            return {
                call: function(id) {
                    var call = peer.call(id, window.localStream);
                    handleCall(call);
                }
            }
        };
        return [PeerConnection];
    });
}());
(function() {
    'use strict';

    define([], function() {

        var peerConn = function() {
            var peer = new Peer({host: 'localhost', port: 9000, path: '/app', debug: 3,
                config: {'iceServers': [{ url: 'stun:stun.l.google.com:19302' }]}});

            return peer;
        };

        return [peerConn];
    })
}());
(function() {
    'use strict';
    /*
        Base service for connections via PeerJS, foundation of PeerDataConn and PeerMediaConn
        Establishes connection to P2PConnectionBroker;
     */
    define([], function() {

        var peerConn = function() {
            var peer = new Peer({host: '10.185.5.37', port: 9000, path: '/app', debug: 3,
                config: {'iceServers': [{ url: 'stun:stun.l.google.com:19302' }]}});

            return peer;
        };

        return [peerConn];
    })
}());
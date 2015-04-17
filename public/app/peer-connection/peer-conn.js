(function() {
    'use strict';
    /*
        Base service for connections via PeerJS, foundation of PeerDataConn and PeerMediaConn
        Establishes connection to P2PConnectionBroker;
     */
    define(['json!config/peer-conn-properties.json'], function(properties) {

        var peerConn = function() {
            var peer = new Peer({host: properties.host, port: properties.port, path: properties.path, debug: 3,
                config: {'iceServers': properties.iceServers}});

            return peer;
        };

        return [peerConn];
    })
}());
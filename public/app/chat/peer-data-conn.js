(function() {
    'use strict';

    define([], function() {
        var PeerDataConnection = function($rootScope, PeerConn, HumaneNotifier) {
            var caller, answerer;
            PeerConn.on('connection', function(conn) {
                caller = conn;
                handleCall(conn);
            });

            function handleCall(conn) {
                conn.on('data', function(data) {
                    $rootScope.$broadcast('chat update', data);
                });
            }

            return {
                connect: function(id) {
                    answerer = PeerConn.connect(id);
                    handleCall(answerer);
                },
                send: function(message) {
                    if(caller === undefined && answerer === undefined) {
                        HumaneNotifier.error("Not connected to another party.");
                        throw("Peer connection not established.");
                    }

                    if(caller !== undefined) {
                        caller.send(message);
                    }else {
                        answerer.send(message);
                    }
                }
            }
        };

        return ['$rootScope', 'PeerConn', 'HumaneNotifier', PeerDataConnection];
    });
}());
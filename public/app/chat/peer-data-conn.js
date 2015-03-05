(function() {
    'use strict';

    define([], function() {
        var PeerDataConnection = function(PeerConn, ChatCache, $rootScope) {
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
                    if(caller !== undefined) {
                        caller.send(message);
                    }else {
                        answerer.send(message);
                    }
                }
            }
        };

        return ['PeerConn', 'ChatCache', '$rootScope', PeerDataConnection];
    });
}());
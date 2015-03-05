(function() {

    'use strict';

    define([], function() {

        var clientVideoCtrl = function(PeerMediaConn, PeerDataConn, $scope) {
            $scope.call = function(id) {
                if(id !== undefined && /^[a-zA-Z0-9]{16}$/.test(id)) {
                    PeerMediaConn.call(id);
                    PeerDataConn.connect(id);
                }else {
                    console.log("ID is undefined OR isn't 16 alphanumerical characters long.");
                }
            };
        };

        return ['PeerMediaConn', 'PeerDataConn', '$scope', clientVideoCtrl];
    })
}());
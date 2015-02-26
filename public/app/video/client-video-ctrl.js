(function() {

    'use strict';

    define(['peer-conn'], function() {

        var clientVideoCtrl = function(PeerConn, $scope) {
            $scope.answerer = {};

            $scope.call = function(id) {
                PeerConn.call(id);
            }
        };

        return ['PeerConn', '$scope', clientVideoCtrl];
    })
}());
(function() {

    'use strict';

    define(['peer-conn', 'angular'], function() {

        var clientVideoCtrl = function(PeerConn, $scope, $stateParams) {
            $scope.answerer = {};

            $scope.call = function(id) {
                if(id !== undefined && /^[a-zA-Z0-9]{16}$/.test(id)) {
                    console.log("calling");
                    PeerConn.call(id);
                }else {
                    console.log("I ain't calling shit.");
                }

            };

            $scope.test = function() {
                console.log("hello from yo parent")
            };
        };

        return ['PeerConn', '$scope', '$stateParams', clientVideoCtrl];
    })
}());
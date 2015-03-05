(function() {

    'use strict';

    define([
        'angular',
        'zeroclipboard',
        'peer-conn',
        'peer-media-conn',
        'peer-data-conn',
        'client-video',
        'client-video-ctrl',
        'chat-cache',
        'chat-ctrl',
        'angular-ui-router',
        'angular-animate',
        'angular-clip'
    ], function(angular, ZeroClipboard, peerConn, peerMediaConn, peerDataConn, clientVideoDirective, clientVideoCtrl, chatCache,
                chatCtrl) {
        var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngClipboard']);
        app.init = function() {
            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                angular.bootstrap(document.documentElement, [app.name]);
            } else {
                document.onreadystatechange = function () {
                    if (document.readyState === 'interactive') {
                        angular.bootstrap(document.documentElement, [app.name]);
                    }
                };
            }
        };

        /*obviously not optimal*/
        window.ZeroClipboard = ZeroClipboard;

        app.service('PeerConn', peerConn);
        app.service('PeerMediaConn', peerMediaConn);
        app.service('PeerDataConn', peerDataConn);
        app.factory('ChatCache', chatCache);
        app.directive('clientVideo', clientVideoDirective);
        app.controller('ClientVideoCtrl', clientVideoCtrl);
        app.controller('ChatCtrl', chatCtrl);
        app.controller('NavBarCtrl', function($scope) {
            $scope.getTextToCopy = function() {
                var copyInput = angular.element(document.querySelector('#copyInput'));
                return copyInput.attr('value');
            }
        });

        app.config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('video');
            $stateProvider
                .state('video', {
                    url: '/video',
                    templateUrl: 'app/video/partial-video.html',
                    controller: 'ClientVideoCtrl'
                })
                .state('video.call', {
                    url: '/{id:[a-zA-Z0-9]{16}}',
                    templateUrl: '',
                    controller: function($state, $stateParams, $scope) {
                        $scope.$parent.call($stateParams.id);
                        $state.go('video');
                    }
                })
                .state('video.chat', {
                    templateUrl: 'app/chat/partial-chat.html',
                    controller: 'ChatCtrl'
                })
                .state('video.tutorial', {
                    template: 'Ailailailai test'
                })
        });

        return app;
    });
}());
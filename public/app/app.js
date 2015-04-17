(function() {
    'use strict';

    define([
        'angular',
        'zero-clipboard',
        'zero-clip-service',
        'humane-notif',
        'call-status',
        'peer-conn',
        'peer-media-conn',
        'peer-data-conn',
        'navbar-ctrl',
        'client-video',
        'client-video-ctrl',
        'video-call',
        'video-confirm-call',
        'video-hold-call',
        'chat-cache',
        'chat-focus-directive',
        'chat-ctrl',
        'angular-ui-router',
        'angular-animate',
        'angular-clip',
        'angular-bootstrap'
    ], function(angular, zeroClipboard, ZeroClipboard, humaneNotifier, callStatus, peerConn, peerMediaConn, peerDataConn,
                navbarCtrl, clientVideoDirective, clientVideoCtrl, videoCall, videoConfirmCall, videoHoldCall, chatCache,
                chatFocusDirective, chatCtrl) {
        var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngClipboard', 'ui.bootstrap']);
        app.init = function() {
            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                angular.bootstrap(document.documentElement, [app.name]);
            } else {
                document.onreadystatechange = function () {
                    if (document.readyState === 'interactive') {
                        angular.bootstrap(document.documentElement, [app.name]);
                    }
                }
            }
        };

        app.service('CallStatus', callStatus);
        app.service('PeerConn', peerConn);
        app.service('PeerMediaConn', peerMediaConn);
        app.service('PeerDataConn', peerDataConn);
        app.service('HumaneNotifier', humaneNotifier);
        app.service('ChatCache', chatCache);
        app.service('ZeroClipboardService', ZeroClipboard);
        app.directive('clientVideo', clientVideoDirective);
        app.directive('chatFocus', chatFocusDirective);
        app.controller('ClientVideoCtrl', clientVideoCtrl);
        app.controller('VideoCall', videoCall);
        app.controller('VideoCallConfirm', videoConfirmCall);
        app.controller('VideoCallHold', videoHoldCall);
        app.controller('ChatCtrl', chatCtrl);
        app.controller('NavBarCtrl', navbarCtrl);

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
                    controller: 'VideoCall'
                })
                .state('video.chat', {
                    templateUrl: 'app/chat/partial-chat.html',
                    controller: 'ChatCtrl'
                })
                .state('video.confirm', {
                    controller: 'VideoCallConfirm'
                })
                .state('video.hold', {
                    controller: 'VideoCallHold'
                });
        });

        return app;
    });
}());
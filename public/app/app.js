(function() {

    'use strict';

    define([
        'angular',
        'home-ctrl',
        'chat-bubble',
        'peer-conn',
        'client-video',
        'client-video-ctrl',
        'angular-ui-router',
        'angular-animate'
    ], function(angular, homeCtrl, chatBubble, peerConn, clientVideoDirective, clientVideoCtrl) {
        var app = angular.module('app', ['ui.router', 'ngAnimate']);
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

        app.service('ChatBubble', chatBubble);
        app.service('PeerConn', peerConn);
        app.directive('clientVideo', clientVideoDirective);
        app.controller('HomeCtrl', homeCtrl);
        app.controller('ClientVideoCtrl', clientVideoCtrl);

        app.config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        'headers': {
                            templateUrl: 'app/home/partial-home.html',
                            controller: 'HomeCtrl'
                        }
                    }
                })

                .state('video', {
                    url: '/video',
                    views: {
                        'video': {
                            templateUrl: 'app/video/partial-client-video.html',
                            controller: 'ClientVideoCtrl'
                        }
                    }
                })
        });

        return app;
    });
}());
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

            /*Equivalent of $urlRouterProvider.otherwise(''); that does not change URL.*/
            /*$stateProvider.state("otherwise", {
                url: "*path",
                views: {
                    'headers': {
                        templateUrl: "app/error/partial-error.html"
                    }
                }
            });*/

            $stateProvider
                .state('video', {
                    url: '',
                    templateUrl: 'app/video/partial-video.html',
                    controller: 'ClientVideoCtrl'
                })
                .state('video.call', {
                    url: '/:id',
                    templateUrl: '',
                    controller: function($state, $stateParams, $scope) {
                        $scope.$parent.call($stateParams.id);
                        $state.go('video');
                    }
                })
                .state('video.chat', {
                    templateUrl: 'app/chat/partial-chat.html'
                })
                .state('video.tutorial', {
                    template: 'Ailailailai test'
                })
        });

        return app;
    });
}());
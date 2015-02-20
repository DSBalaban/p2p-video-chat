(function() {

    'use strict';

    define([
        'angular',
        'home/home-ctrl',
        'services/chat-bubble',
        'angular-ui-router',
        'angular-animate'
    ], function(angular, homeCtrl, chatBubble) {
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
        app.controller('HomeCtrl', homeCtrl);

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

                .state('about', {
                    url: '/about',
                    views: {
                        'headers': {
                            templateUrl: 'app/about/partial-about.html'
                        }
                    }
                })
        });

        return app;
    })
}());
(function() {
    'use strict';

    define([], function() {
        var homeCtrl = function($scope, ChatBubble) {

            ChatBubble.hi();
            $scope.data = 1;
            console.log($scope.data, typeof $scope.data);
        };

        return ['$scope', 'ChatBubble', homeCtrl];
    })
}());
require.config({
    paths: {
        'angular' : '../static/vendor/angular/angular.min',
        'angular-ui-router': '../static/vendor/angular-ui-router/release/angular-ui-router.min',
        'angular-animate': '../static/vendor/angular-animate/angular-animate.min'
    },
    shim: {
        angular: {
            exports : 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        }
    },
    baseUrl: 'app'
});

require(['app'], function (app) {
    app.init();
});
(function() {

    define([], function() {

        var chatBubble = function() {
            this.hi = function() {
                console.log('lolbubbs');
            }
        };

        return [chatBubble];
    });
}());
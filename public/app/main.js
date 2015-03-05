require.config({
    baseUrl: 'app',
    paths: {
        'angular' : '../static/vendor/angular/angular.min',
        'angular-ui-router': '../static/vendor/angular-ui-router/release/angular-ui-router.min',
        'angular-animate': '../static/vendor/angular-animate/angular-animate.min',
        'angular-clip': '../static/vendor/ng-clip/src/ngClip',
        'zeroclipboard': '../static/vendor/zeroclipboard/dist/ZeroClipboard',
        'peerjs': '../static/vendor/peerjsmock/peer',
        'peer-conn': 'peer-connection/peer-conn',
        'peer-media-conn': 'video/peer-media-conn',
        'peer-data-conn': 'chat/peer-data-conn',
        'client-video': 'video/client-video-directive',
        'client-video-ctrl': 'video/client-video-ctrl',
        'chat-cache': 'chat/chat-cache',
        'chat-ctrl': 'chat/chat-ctrl'
    },
    shim: {
        angular: {
            exports : 'angular'
        },
        peerjs: {
            exports: 'Peer'
        },
        'peer-conn': {
            deps: ['peerjs']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-clip': {
            deps: ['angular', 'zeroclipboard']
        },
        'client-video-ctrl': {
            deps: ['angular', 'peer-media-conn']
        }
    }
});

require(['app'], function (app) {
    app.init();
});
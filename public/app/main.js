require.config({
    baseUrl: 'app',
    paths: {
        'angular' : '../static/vendor/angular/angular.min',
        'angular-ui-router': '../static/vendor/angular-ui-router/release/angular-ui-router.min',
        'angular-animate': '../static/vendor/angular-animate/angular-animate.min',
        'angular-clip': '../static/vendor/ng-clip/src/ngClip',
        'angular-bootstrap': '../static/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
        'zeroclipboard': '../static/vendor/zeroclipboard/dist/ZeroClipboard',
        'humane': '../static/vendor/humane/humane.min',
        'humane-notif': 'services/humane-notifier',
        'webcam-status': 'webcam/webcam-status',
        'peerjs': '../static/vendor/peerjsmock/peer',
        'peer-conn': 'peer-connection/peer-conn',
        'peer-media-conn': 'video/peer-media-conn',
        'peer-data-conn': 'chat/peer-data-conn',
        'navbar-ctrl': 'navbar/navbar-ctrl',
        'client-video': 'video/client-video-directive',
        'client-video-ctrl': 'video/client-video-ctrl',
        'video-call': 'video/nested-states/video-call',
        'video-confirm-call': 'video/nested-states/video-confirm-call',
        'chat-cache': 'chat/chat-cache',
        'chat-focus-directive': 'chat/chat-focus-directive',
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
        'angular-bootstrap': {
            deps: ['angular']
        },
        'client-video-ctrl': {
            deps: ['angular', 'peer-media-conn']
        }
    }
});

require(['app'], function (app) {
    app.init();
});
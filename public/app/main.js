require.config({
    paths: {
        'angular' : '../static/vendor/angular/angular.min',
        'angular-ui-router': '../static/vendor/angular-ui-router/release/angular-ui-router.min',
        'angular-animate': '../static/vendor/angular-animate/angular-animate.min',
        'peerjs': '../static/vendor/peerjsmock/peer',
        'chat-bubble': 'services/chat-bubble',
        'home-ctrl': 'home/home-ctrl',
        'peer-conn': 'services/peer-conn',
        'client-video': 'video/client-video-directive',
        'client-video-ctrl': 'video/client-video-ctrl'
    },
    shim: {
        angular: {
            exports : 'angular'
        },
        peerjs: {
            exports: 'Peer'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'client-video-ctrl': {
            deps: ['angular', 'peer-conn']
        }
    },
    baseUrl: 'app'
});

require(['app'], function (app) {
    app.init();
});
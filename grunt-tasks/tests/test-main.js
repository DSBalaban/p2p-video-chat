var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
        console.log(file);
      tests.push(file);
    }
  }
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/public/app/',

  paths: {
    'angular' : '../static/vendor/angular/angular.min',
    'angular-ui-router': '../static/vendor/angular-ui-router/release/angular-ui-router.min',
    'angular-animate': '../static/vendor/angular-animate/angular-animate.min',
    'angular-clip': '../static/vendor/ng-clip/src/ngClip',
    'angular-bootstrap': '../static/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
    'zero-clipboard': '../static/vendor/zeroclipboard/dist/ZeroClipboard',
    'zero-clip-service': 'services/zero-clipboard',
    'humane': '../static/vendor/humane/humane.min',
    'humane-notif': 'services/humane-notifier',
    'call-status': 'call/call-status',
    'peerjs': '../static/vendor/peerjsmock/peer',
    'peer-conn': 'peer-connection/peer-conn',
    'peer-media-conn': 'video/peer-media-conn',
    'peer-data-conn': 'chat/peer-data-conn',
    'navbar-ctrl': 'navbar/navbar-ctrl',
    'client-video': 'video/client-video-directive',
    'client-video-ctrl': 'video/client-video-ctrl',
    'video-call': 'video/nested-states/video-call',
    'video-confirm-call': 'video/nested-states/video-confirm-call',
    'video-hold-call': 'video/nested-states/video-hold-call',
    'chat-cache': 'chat/chat-cache',
    'chat-focus-directive': 'chat/chat-focus-directive',
    'chat-ctrl': 'chat/chat-ctrl',
    'angular-mocks': '../static/vendor/angular-mocks/angular-mocks'
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
      deps: ['angular', 'zero-clipboard']
    },
    'angular-bootstrap': {
      deps: ['angular']
    },
    'client-video-ctrl': {
      deps: ['angular', 'peer-media-conn']
    },
    'angular-mocks': {
    deps: ['angular']
    }
  },

  // dynamically load all test files
  deps: tests,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});

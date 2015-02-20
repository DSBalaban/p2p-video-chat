var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/public/app',

  paths: {
    'angular' : '../static/vendor/angular/angular.min',
    'angular-ui-router': '../static/vendor/angular-ui-router/release/angular-ui-router.min',
    'angular-animate': '../static/vendor/angular-animate/angular-animate.min',
    'angular-mocks': '../static/vendor/angular-mocks/angular-mocks'
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

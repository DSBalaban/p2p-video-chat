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
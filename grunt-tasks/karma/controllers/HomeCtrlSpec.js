define(['app', 'angular-mocks'], function(app) {

    describe('app module', function() {
        beforeEach(module('app'));
        var HomeCtrl, scope;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            HomeCtrl = $controller('HomeCtrl', {
                $scope: scope
            });
        }));

        it("App should be defined.", function() {
            expect(app).toBeDefined();
        });

        it("HomeCtrl data should be 1", function() {
            expect(scope.data).toBe(1);
        })
    });
});
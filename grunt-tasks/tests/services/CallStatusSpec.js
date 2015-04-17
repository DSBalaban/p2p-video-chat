'use strict';
define(['app', 'angular-mocks'], function(app, mocks) {
    describe('call-status', function() {
        beforeEach(module('app'));

        it('should have "webcamAllowed" set to false', inject(function(CallStatus) {
            expect(CallStatus.webcamAllowed).toBe(false);
        }));
        it('should have "active" set to false', inject(function(CallStatus) {
            expect(CallStatus.active).toBe(false);
        }));
    });
});
define(['app', 'angular-mocks'], function(app, mocks) {
    describe('Chat Controller', function() {
        var ChatCtrl, scope;
        beforeEach(module('app'));
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ChatCtrl = $controller('ChatCtrl', {
                $scope: scope
            });
        }));

        it("should have an empty chatData array on the scope", inject(function() {
            expect(scope.chatData.length).toBeFalsy();
        }));
        it('should have an empty string as the currentMessage', function() {
            expect(scope.currentMessage === '').toBe(true);
        });
        it('should call "send" on PeerDataConn and add message to ChatCache', inject(function(ChatCache, PeerDataConn) {
            spyOn(PeerDataConn, "send");
            scope.sendMessage("test");
            expect(PeerDataConn.send).toHaveBeenCalled();
            expect(ChatCache.getChatHistory().length).toBeGreaterThan(0);
            expect(scope.chatData.length).toBeTruthy();
        }));
        it('should respond to the "chat update" event', inject(function($rootScope, ChatCache) {
            spyOn(ChatCache, 'addChatEntry');
            $rootScope.$broadcast("chat update", "testamonos");
            expect(ChatCache.addChatEntry).toHaveBeenCalledWith({message: 'testamonos', sender: 'them'});
            expect(scope.chatData.length).toEqual(ChatCache.getChatHistory().length);
        }));
    });
});
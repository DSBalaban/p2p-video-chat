'use strict';
define(['app', 'angular-mocks'], function(app, mocks) {
    describe('Chat Cache persists chat data through different states', function() {
        beforeEach(module('app'));
        beforeEach(inject(function(ChatCache) {
            ChatCache.addChatEntry("testing123");
            ChatCache.addChatEntry(5891);
            ChatCache.addChatEntry("I am meant to be long enough to be long and tested for my beautiful and staggering" +
            "length. Do not be fooled. I will show no mercy. Huzzah.");
        }));
        it('should have three entries', inject(function(ChatCache) {
            var chatHistory = ChatCache.getChatHistory();
            expect(chatHistory.length).toEqual(3);
            expect(chatHistory[0]).toEqual("testing123");
        }));
        it('should have a number as its second message', inject(function(ChatCache) {
            expect(typeof ChatCache.getChatHistory()[1]).toBe("number");
        }));
        it('should have a message longer than 100 characters', inject(function(ChatCache) {
            expect(ChatCache.getChatHistory()[2].length).toBeGreaterThan(100);
        }));
        it('should have no entries', inject(function(ChatCache) {
            ChatCache.removeAll();
            expect(ChatCache.getChatHistory().length).toBe(0);
        }));
    });
});
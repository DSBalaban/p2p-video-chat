(function() {
    define([], function() {
        var cache = function($cacheFactory) {
            console.log('HIIII I r ChatCache');
            var Cache = $cacheFactory('chatData');
            var chatHistory = [];
            return {
                getChatHistory: function() {
                    var data = Cache.get("chatEntries");
                    return data !== undefined ? data : [];
                },
                addChatEntry: function(value) {
                    chatHistory.push(value);
                    Cache.put("chatEntries", chatHistory);
                }
            }
        };

        return ['$cacheFactory', cache];
    });
}());
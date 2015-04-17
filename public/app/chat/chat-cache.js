(function() {
    /*
        Cache service that retains chat history for the duration of the session
     */
    define([], function() {
        var cache = function($cacheFactory) {
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
                },
                removeAll: function() {
                    Cache.removeAll();
                }
            }
        };

        return ['$cacheFactory', cache];
    });
}());
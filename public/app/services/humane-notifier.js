(function() {
    'use strict';

    define(['humane'], function(Humane) {
        var HumaneNotifier = function() {
            var notify = Humane.create({baseCls: 'humane-libnotify', timeout: 2500});
            notify.info = Humane.spawn({addnCls: 'humane-libnotify-info'});
            notify.error = Humane.spawn({addnCls: 'humane-libnotify-error', timeout: 4000});

            return {
                log: function(message) {
                    notify.log(message);
                },
                info: function(message) {
                    notify.info(message);
                },
                error: function(message) {
                    notify.error(message);
                }
            }
        };

        return [HumaneNotifier];
    })
}());
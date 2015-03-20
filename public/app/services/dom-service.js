(function() {
    'use strict';

    define([], function() {
        var domModeler = function() {
            var self = this;
            self.getElemById = function(id) {
                return angular.element(document.querySelector('#'+id));
            };
            self.attr = function(target, attribute, value) {
                if(target === undefined || target === null) {
                  console.error("No element was specified.");
                }

                target.attr(attribute, value);
                return target;
            };
        };

        return [domModeler];
    });
}());
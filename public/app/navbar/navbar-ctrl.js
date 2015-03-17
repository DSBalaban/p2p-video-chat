(function() {
    'use strict';

    define([], function() {
        var navbarCtrl = function($scope, HumaneNotifier) {
            $scope.getTextToCopy = function() {
                var copyInput = angular.element(document.querySelector('#copyInput'));
                if(!!copyInput) {
                    HumaneNotifier.info("Copied to Clipboard");
                }else {
                    HumaneNotifier.error("Failed to Copy Link");
                }
                return copyInput.attr('value');
            }
        };
        return ['$scope', 'HumaneNotifier', navbarCtrl];
    });
}());
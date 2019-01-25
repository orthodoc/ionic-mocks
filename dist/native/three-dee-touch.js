"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var ThreeDeeTouchMock = /** @class */ (function () {
    function ThreeDeeTouchMock() {
    }
    ThreeDeeTouchMock.instance = function () {
        var instance = jasmine.createSpyObj('ThreeDeeTouch', [
            'isAvailable',
            'watchForTouches',
            'configureQuickActions',
            'onHomeIconPressed',
            'enableLinkPreview',
            'disableLinkPreview'
        ]);
        instance.isAvailable.and.returnValue(Promise.resolve(true));
        instance.watchForTouches.and.returnValue(rxjs_1.of({}));
        instance.onHomeIconPressed.and.returnValue(rxjs_1.of(null));
        return instance;
    };
    return ThreeDeeTouchMock;
}());
exports.ThreeDeeTouchMock = ThreeDeeTouchMock;
//# sourceMappingURL=three-dee-touch.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var KeyboardMock = /** @class */ (function () {
    function KeyboardMock() {
    }
    KeyboardMock.instance = function () {
        var instance = jasmine.createSpyObj('Keyboard', [
            'hideKeyboardAccessoryBar',
            'show',
            'close',
            'disableScroll',
            'onKeyboardShow',
            'onKeyboardHide'
        ]);
        instance.onKeyboardShow.and.returnValue(rxjs_1.of(null));
        instance.onKeyboardHide.and.returnValue(rxjs_1.of(null));
        return instance;
    };
    return KeyboardMock;
}());
exports.KeyboardMock = KeyboardMock;
//# sourceMappingURL=keyboard.js.map
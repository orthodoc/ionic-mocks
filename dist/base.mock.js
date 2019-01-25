"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseMock = /** @class */ (function () {
    function BaseMock(baseName, methodNames) {
        var _this = this;
        this.spyObj = jasmine.createSpyObj(baseName, methodNames);
        methodNames.forEach(function (methodName) {
            _this[methodName] = _this.spyObj[methodName];
        });
    }
    return BaseMock;
}());
exports.BaseMock = BaseMock;
//# sourceMappingURL=base.mock.js.map
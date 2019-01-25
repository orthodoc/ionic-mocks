"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_mock_1 = require("../base.mock");
var deprecated_decorator_1 = require("deprecated-decorator");
var METHODS = [
    'present',
    'dismiss'
];
var ActionSheetMock = /** @class */ (function (_super) {
    __extends(ActionSheetMock, _super);
    function ActionSheetMock(actionSheet) {
        var _this = _super.call(this, 'ActionSheet', METHODS) || this;
        _this.spyObj.present.and.returnValue(Promise.resolve());
        _this.spyObj.dismiss.and.returnValue(Promise.resolve());
        return _this;
    }
    ActionSheetMock.instance = function () {
        return new ActionSheetMock();
    };
    __decorate([
        deprecated_decorator_1.default('new ActionSheet()'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ActionSheetMock, "instance", null);
    return ActionSheetMock;
}(base_mock_1.BaseMock));
exports.ActionSheetMock = ActionSheetMock;
//# sourceMappingURL=action-sheet.js.map
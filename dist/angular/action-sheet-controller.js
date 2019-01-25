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
var deprecated_decorator_1 = require("deprecated-decorator");
var action_sheet_1 = require("./action-sheet");
var base_mock_1 = require("../base.mock");
var METHODS = [
    'create'
];
var ActionSheetControllerMock = /** @class */ (function (_super) {
    __extends(ActionSheetControllerMock, _super);
    function ActionSheetControllerMock(actionSheet) {
        var _this = _super.call(this, 'ActionSheet', METHODS) || this;
        _this.spyObj.create.and.returnValue(actionSheet || new action_sheet_1.ActionSheetMock());
        return _this;
    }
    ActionSheetControllerMock.instance = function (actionSheet) {
        return new ActionSheetControllerMock(actionSheet);
    };
    __decorate([
        deprecated_decorator_1.default('new ActionSheetControllerMock()'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [action_sheet_1.ActionSheetMock]),
        __metadata("design:returntype", Object)
    ], ActionSheetControllerMock, "instance", null);
    return ActionSheetControllerMock;
}(base_mock_1.BaseMock));
exports.ActionSheetControllerMock = ActionSheetControllerMock;
//# sourceMappingURL=action-sheet-controller.js.map
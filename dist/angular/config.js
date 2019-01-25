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
var base_mock_1 = require("../base.mock");
var METHODS = [
    'get',
    'getBoolean',
    'getNumber',
    'set',
    'settings',
    'setModeConfig',
    'getModeConfig',
    'setTransition',
    'getTransition'
];
var ConfigMock = /** @class */ (function (_super) {
    __extends(ConfigMock, _super);
    function ConfigMock() {
        var _this = _super.call(this, 'Config', METHODS) || this;
        _this.spyObj.get.and.returnValue('');
        _this.spyObj.getBoolean.and.returnValue(true);
        _this.spyObj.getNumber.and.returnValue(0);
        return _this;
    }
    ConfigMock.instance = function () {
        return new ConfigMock();
    };
    __decorate([
        deprecated_decorator_1.default('new ConfigMock()'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ConfigMock, "instance", null);
    return ConfigMock;
}(base_mock_1.BaseMock));
exports.ConfigMock = ConfigMock;
//# sourceMappingURL=config.js.map
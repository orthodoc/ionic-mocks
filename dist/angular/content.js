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
    'addImg',
    'getContentDimensions',
    'getFixedElement',
    'resize',
    'scrollTo',
    'scrollToBottom',
    'scrollToTop'
];
var ContentMock = /** @class */ (function (_super) {
    __extends(ContentMock, _super);
    function ContentMock() {
        var _this = _super.call(this, 'Content', METHODS) || this;
        _this['contentBottom'] = 10;
        _this['contentHeight'] = 10;
        _this['contentTop'] = 10;
        _this['directionX'] = 'left';
        _this['directionY'] = 'up';
        _this['isScrolling'] = false;
        _this['scrollHeight'] = 10;
        _this['scrollLeft'] = 10;
        _this['scrollTop'] = 10;
        _this['scrollWidth'] = 10;
        _this.spyObj.getContentDimensions.and.returnValue({});
        _this.spyObj.scrollTo.and.returnValue(Promise.resolve());
        _this.spyObj.scrollToBottom.and.returnValue(Promise.resolve());
        _this.spyObj.scrollToTop.and.returnValue(Promise.resolve());
        return _this;
    }
    ContentMock.instance = function () {
        return new ContentMock();
    };
    __decorate([
        deprecated_decorator_1.default('new ContentMock()'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ContentMock, "instance", null);
    return ContentMock;
}(base_mock_1.BaseMock));
exports.ContentMock = ContentMock;
//# sourceMappingURL=content.js.map
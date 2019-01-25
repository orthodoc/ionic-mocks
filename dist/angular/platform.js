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
var base_mock_1 = require("./../base.mock");
var deprecated_decorator_1 = require("deprecated-decorator");
var METHODS = [
    'dir',
    'getQueryParam',
    'height',
    'is',
    'isLandscape',
    'isPortrait',
    'isRTL',
    'lang',
    'pause',
    'platforms',
    'ready',
    'registerBackButtonAction',
    'resize',
    'resume',
    'setDir',
    'setLang',
    'testUserAgent',
    'url',
    'versions',
    'width',
    'doc',
    'registerListener',
    'win',
    'getActiveElement',
    'raf',
    'hasFocus',
    'getElementComputedStyle',
    'timeout'
];
var PlatformMock = /** @class */ (function (_super) {
    __extends(PlatformMock, _super);
    function PlatformMock() {
        var _this = _super.call(this, 'Platform', METHODS) || this;
        _this.spyObj.dir.and.returnValue('');
        _this.spyObj.getQueryParam.and.returnValue('');
        _this.spyObj.height.and.returnValue(0);
        _this.spyObj.is.and.returnValue(true);
        _this.spyObj.isLandscape.and.returnValue(false);
        _this.spyObj.isPortrait.and.returnValue(true);
        _this.spyObj.isRTL.and.returnValue(false);
        _this.spyObj.lang.and.returnValue('en');
        _this.spyObj.platforms.and.returnValue([]);
        _this.spyObj.ready.and.returnValue(Promise.resolve());
        _this.spyObj.registerBackButtonAction.and.returnValue(function () { });
        _this.spyObj.registerListener.and.returnValue(function () { });
        _this.spyObj.url.and.returnValue('');
        _this.spyObj.versions.and.returnValue({});
        _this.spyObj.width.and.returnValue(0);
        _this.spyObj.doc.and.returnValue(document);
        _this.spyObj.win.and.returnValue(window);
        _this.spyObj.getActiveElement.and.returnValue(document['activeElement']);
        _this.spyObj.raf.and.returnValue(1);
        _this.spyObj.hasFocus.and.returnValue(true);
        _this.spyObj.getElementComputedStyle.and.returnValue({
            paddingLeft: '10',
            paddingTop: '10',
            paddingRight: '10',
            paddingBottom: '10'
        });
        _this.spyObj.timeout.and.returnValue(function (callback, timer) { return setTimeout(callback, timer); });
        return _this;
    }
    PlatformMock.instance = function () {
        return new PlatformMock();
    };
    __decorate([
        deprecated_decorator_1.deprecated('new PlatformMock()'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], PlatformMock, "instance", null);
    return PlatformMock;
}(base_mock_1.BaseMock));
exports.PlatformMock = PlatformMock;
//# sourceMappingURL=platform.js.map
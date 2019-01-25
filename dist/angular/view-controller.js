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
var rxjs_1 = require("rxjs");
var nav_params_1 = require("./nav-params");
var base_mock_1 = require("../base.mock");
var deprecated_decorator_1 = require("deprecated-decorator");
var METHODS = [
    'willEnter',
    'didEnter',
    'willLeave',
    'didLeave',
    'willUnload',
    'didUnload',
    'dismiss',
    'onDidDismiss',
    'onWillDismiss',
    'enableBack',
    'isFirst',
    'isLast',
    'pageRef',
    'getContent',
    'contentRef',
    'hasNavbar',
    'index',
    'subscribe',
    'getNav',
    'getIONContent',
    'writeReady',
    'readReady',
    'setBackButtonText',
    'showBackButton',
    '_setHeader',
    '_setNavbar',
    '_setNav',
    '_setInstance',
    '_setIONContent',
    '_setContent',
    '_setContentRef',
    '_setFooter',
    '_setIONContentRef'
];
var ViewControllerMock = /** @class */ (function (_super) {
    __extends(ViewControllerMock, _super);
    function ViewControllerMock() {
        var _this = _super.call(this, 'ViewController', METHODS) || this;
        _this.spyObj.willEnter.and.returnValue(rxjs_1.of({}));
        _this.spyObj.didEnter.and.returnValue(rxjs_1.of({}));
        _this.spyObj.willLeave.and.returnValue(rxjs_1.of({}));
        _this.spyObj.didLeave.and.returnValue(rxjs_1.of({}));
        _this.spyObj.willUnload.and.returnValue(rxjs_1.of({}));
        _this.spyObj.didUnload.and.returnValue(rxjs_1.of({}));
        _this.spyObj.dismiss.and.returnValue(Promise.resolve());
        _this.spyObj.onDidDismiss.and.returnValue(Promise.resolve());
        _this.spyObj.onWillDismiss.and.returnValue(Promise.resolve());
        _this.spyObj.enableBack.and.returnValue(true);
        _this.spyObj.isFirst.and.returnValue(false);
        _this.spyObj.isLast.and.returnValue(false);
        _this.spyObj.pageRef.and.returnValue({});
        _this.spyObj.getContent.and.returnValue({});
        _this.spyObj.contentRef.and.returnValue(Promise.resolve());
        _this.spyObj.hasNavbar.and.returnValue(true);
        _this.spyObj.index.and.returnValue(true);
        _this.spyObj.subscribe.and.returnValue(rxjs_1.of({}));
        _this.spyObj.getNav.and.returnValue({});
        _this.spyObj.getIONContent.and.returnValue({});
        _this.spyObj['writeReady'] = {
            emit: function () { },
            subscribe: function () { }
        };
        _this.spyObj['readReady'] = {
            emit: function () { },
            subscribe: function () { }
        };
        _this.spyObj['component'] = {};
        _this.spyObj['data'] = nav_params_1.NavParamsMock.instance();
        _this.spyObj['instance'] = {};
        _this.spyObj['id'] = '';
        return _this;
    }
    ViewControllerMock.instance = function () {
        return new ViewControllerMock();
    };
    __decorate([
        deprecated_decorator_1.default('use new ViewControllerMock()'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ViewControllerMock, "instance", null);
    return ViewControllerMock;
}(base_mock_1.BaseMock));
exports.ViewControllerMock = ViewControllerMock;
//# sourceMappingURL=view-controller.js.map
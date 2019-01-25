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
var nav_controller_1 = require("./nav-controller");
var base_mock_1 = require("../base.mock");
var deprecated_decorator_1 = require("deprecated-decorator");
var METHODS = [
    'getActiveNav',
    'getActiveNavs',
    'getNavByIdOrName',
    'getRootNav',
    'getRootNavs',
    'getRootNavById',
    'isScrolling',
    'setTitle',
    'viewDidEnter',
    'viewDidLeave',
    'viewDidLoad',
    'viewWillEnter',
    'viewWillLeave',
    'viewWillUnload'
];
var AppMock = /** @class */ (function (_super) {
    __extends(AppMock, _super);
    function AppMock(_navCtrl, _viewObservable) {
        var _this = _super.call(this, 'App', METHODS) || this;
        _this._navCtrl = _navCtrl;
        _this._viewObservable = _viewObservable;
        _this.spyObj.getActiveNav.and.returnValue(_navCtrl || new nav_controller_1.NavControllerMock());
        _this.spyObj.getActiveNavs.and.returnValue(_navCtrl || [new nav_controller_1.NavControllerMock()]);
        _this.spyObj.getNavByIdOrName.and.returnValue(_navCtrl || new nav_controller_1.NavControllerMock());
        _this.spyObj.getRootNav.and.returnValue(_navCtrl || new nav_controller_1.NavControllerMock());
        _this.spyObj.getRootNavs.and.returnValue(_navCtrl || [new nav_controller_1.NavControllerMock()]);
        _this.spyObj.getRootNavById.and.returnValue(_navCtrl || new nav_controller_1.NavControllerMock());
        _this.spyObj.isScrolling.and.returnValue(false);
        _this.spyObj.viewDidEnter.and.returnValue(_viewObservable || rxjs_1.of(undefined));
        _this.spyObj.viewDidLoad.and.returnValue(_viewObservable || rxjs_1.of(undefined));
        _this.spyObj.viewDidLeave.and.returnValue(_viewObservable || rxjs_1.of(undefined));
        _this.spyObj.viewWillEnter.and.returnValue(_viewObservable || rxjs_1.of(undefined));
        _this.spyObj.viewWillLeave.and.returnValue(_viewObservable || rxjs_1.of(undefined));
        _this.spyObj.viewWillUnload.and.returnValue(_viewObservable || rxjs_1.of(undefined));
        return _this;
    }
    AppMock.instance = function (navCtrl, viewObservable) {
        return new AppMock(navCtrl, viewObservable);
    };
    __decorate([
        deprecated_decorator_1.default('new AppMock()'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [nav_controller_1.NavControllerMock,
            rxjs_1.Observable]),
        __metadata("design:returntype", Object)
    ], AppMock, "instance", null);
    return AppMock;
}(base_mock_1.BaseMock));
exports.AppMock = AppMock;
//# sourceMappingURL=app.js.map
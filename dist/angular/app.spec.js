"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var nav_controller_1 = require("./nav-controller");
describe('AppMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new app_1.AppMock();
    });
    it('should initialize', function () {
        expect(classUnderTest).toBeDefined();
    });
    describe('getActiveNav', function () {
        it('should exist', function () {
            expect(classUnderTest.getActiveNav).toBeDefined();
        });
        it('should return a NavController', function () {
            var result = classUnderTest.getActiveNav();
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = new nav_controller_1.NavControllerMock();
            classUnderTest = new app_1.AppMock(navCtrl);
            var result = classUnderTest.getActiveNav();
            expect(result).toBe(navCtrl);
        });
    });
    describe('getActiveNavs', function () {
        it('should exist', function () {
            expect(classUnderTest.getActiveNavs).toBeDefined();
        });
        it('should return a NavController array', function () {
            var result = classUnderTest.getActiveNavs();
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = new nav_controller_1.NavControllerMock();
            classUnderTest = new app_1.AppMock(navCtrl);
            var result = classUnderTest.getActiveNav();
            expect(result).toContain(navCtrl);
        });
    });
    describe('getNavByIdOrName', function () {
        it('should exist', function () {
            expect(classUnderTest.getNavByIdOrName).toBeDefined();
        });
        it('should return a nav', function () {
            var result = classUnderTest.getNavByIdOrName(1);
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = new nav_controller_1.NavControllerMock();
            classUnderTest = new app_1.AppMock(navCtrl);
            var result = classUnderTest.getNavByIdOrName(1);
            expect(result).toBe(navCtrl);
        });
    });
    describe('getRootNav', function () {
        it('should exist', function () {
            expect(classUnderTest.getRootNav).toBeDefined();
        });
        it('should return a nav', function () {
            var result = classUnderTest.getRootNav();
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = new nav_controller_1.NavControllerMock();
            classUnderTest = new app_1.AppMock(navCtrl);
            var result = classUnderTest.getRootNav();
            expect(result).toBe(navCtrl);
        });
    });
    describe('getRootNavs', function () {
        it('should exist', function () {
            expect(classUnderTest.getRootNavs).toBeDefined();
        });
        it('should return a NavController array', function () {
            var result = classUnderTest.getRootNavs();
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = new nav_controller_1.NavControllerMock();
            classUnderTest = new app_1.AppMock(navCtrl);
            var result = classUnderTest.getRootNavs();
            expect(result).toContain(navCtrl);
        });
    });
    describe('getRootNavById', function () {
        it('should exist', function () {
            expect(classUnderTest.getRootNavById).toBeDefined();
        });
        it('should return a nav', function () {
            var result = classUnderTest.getRootNavById(1);
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = new nav_controller_1.NavControllerMock();
            classUnderTest = new app_1.AppMock(navCtrl);
            var result = classUnderTest.getRootNavById(1);
            expect(result).toBe(navCtrl);
        });
    });
    describe('isScrolling', function () {
        it('should exist', function () {
            expect(classUnderTest.isScrolling).toBeDefined();
        });
        it('should return false', function () {
            expect(classUnderTest.isScrolling()).toEqual(false);
        });
    });
    describe('setTitle', function () {
        it('should exist', function () {
            expect(classUnderTest.setTitle).toBeDefined();
        });
    });
    describe('viewDidEnter', function () {
        it('should exist', function () {
            expect(classUnderTest.viewDidEnter).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewDidEnter().subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('viewDidLeave', function () {
        it('should exist', function () {
            expect(classUnderTest.viewDidLeave).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewDidLeave().subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('viewWillEnter', function () {
        it('should exist', function () {
            expect(classUnderTest.viewWillEnter).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewWillEnter().subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('viewWillLeave', function () {
        it('should exist', function () {
            expect(classUnderTest.viewWillLeave).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewDidLeave().subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('viewWillUnLoad', function () {
        it('should exist', function () {
            expect(classUnderTest.viewWillUnload).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewWillUnload().subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
//# sourceMappingURL=app.spec.js.map
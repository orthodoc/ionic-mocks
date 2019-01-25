"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nav_controller_1 = require("./nav-controller");
describe('NavControllerMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new nav_controller_1.NavControllerMock();
    });
    it('should initialize', function () {
        expect(classUnderTest).toBeDefined();
    });
    describe('goToRoot', function () {
        it('should be defined', function () {
            expect(classUnderTest.goToRoot).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.goToRoot().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('initPane', function () {
        it('should be defined', function () {
            expect(classUnderTest.initPane).toBeDefined();
        });
        it('should return 1', function () {
            expect(classUnderTest.initPane()).toEqual(1);
        });
    });
    describe('push', function () {
        it('should be defined', function () {
            expect(classUnderTest.push).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.push().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('insert', function () {
        it('should be defined', function () {
            expect(classUnderTest.insert).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.insert().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('insertPage', function () {
        it('should be defined', function () {
            expect(classUnderTest.insertPage).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.insertPage().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('pop', function () {
        it('should be defined', function () {
            expect(classUnderTest.pop).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.pop().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('popTo', function () {
        it('should be defined', function () {
            expect(classUnderTest.popTo).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.popTo().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('popToRoot', function () {
        it('should be defined', function () {
            expect(classUnderTest.popToRoot).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.popToRoot().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('popAll', function () {
        it('should be defined', function () {
            expect(classUnderTest.popAll).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.popAll().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('remove', function () {
        it('should be defined', function () {
            expect(classUnderTest.remove).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.remove().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('removeView', function () {
        it('should be defined', function () {
            expect(classUnderTest.removeView).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.removeView().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('setRoot', function () {
        it('should be defined', function () {
            expect(classUnderTest.setRoot).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.setRoot().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('setPages', function () {
        it('should be defined', function () {
            expect(classUnderTest.setPages).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.setPages().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('hasChildren', function () {
        it('should be defined', function () {
            expect(classUnderTest.hasChildren).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.hasChildren()).toBe(true);
        });
    });
    describe('canSwipeBack', function () {
        it('should be defined', function () {
            expect(classUnderTest.canSwipeBack).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.canSwipeBack()).toBe(true);
        });
    });
    describe('canGoBack', function () {
        it('should be defined', function () {
            expect(classUnderTest.canGoBack).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.canGoBack()).toBe(true);
        });
    });
    describe('isTransitioning', function () {
        it('should be defined', function () {
            expect(classUnderTest.isTransitioning).toBeDefined();
        });
        it('should return false', function () {
            expect(classUnderTest.isTransitioning()).toBe(false);
        });
    });
    describe('isActive', function () {
        it('should be defined', function () {
            expect(classUnderTest.isActive).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.isActive()).toBe(true);
        });
    });
    describe('indexOf', function () {
        it('should be defined', function () {
            expect(classUnderTest.indexOf).toBeDefined();
        });
        it('should return 0', function () {
            expect(classUnderTest.indexOf()).toEqual(0);
        });
    });
    describe('getViews', function () {
        it('should be defined', function () {
            expect(classUnderTest.getViews).toBeDefined();
        });
        it('should return empty Array', function () {
            expect(classUnderTest.getViews()).toEqual([]);
        });
    });
    describe('isSwipeBackEnabled', function () {
        it('should be defined', function () {
            expect(classUnderTest.isSwipeBackEnabled).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.isSwipeBackEnabled()).toBe(true);
        });
    });
});
//# sourceMappingURL=nav-controller.spec.js.map
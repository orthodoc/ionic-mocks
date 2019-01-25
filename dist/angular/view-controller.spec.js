"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_controller_1 = require("./view-controller");
describe('ViewControllerMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new view_controller_1.ViewControllerMock();
    });
    it('should initialize', function () {
        expect(classUnderTest).toBeDefined();
    });
    describe('willEnter', function () {
        it('should be defined', function () {
            expect(classUnderTest.willEnter).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.willEnter().subscribe(function (result) {
                expect(result).toEqual({});
                done();
            });
        });
    });
    describe('didEnter', function () {
        it('should be defined', function () {
            expect(classUnderTest.didEnter).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.didEnter().subscribe(function (result) {
                expect(result).toEqual({});
                done();
            });
        });
    });
    describe('willLeave', function () {
        it('should be defined', function () {
            expect(classUnderTest.willLeave).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.willLeave().subscribe(function (result) {
                expect(result).toEqual({});
                done();
            });
        });
    });
    describe('didLeave', function () {
        it('should be defined', function () {
            expect(classUnderTest.didLeave).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.didLeave().subscribe(function (result) {
                expect(result).toEqual({});
                done();
            });
        });
    });
    describe('willUnload', function () {
        it('should be defined', function () {
            expect(classUnderTest.willUnload).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.willUnload().subscribe(function (result) {
                expect(result).toEqual({});
                done();
            });
        });
    });
    describe('didUnload', function () {
        it('should be defined', function () {
            expect(classUnderTest.didUnload).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.didUnload().subscribe(function (result) {
                expect(result).toEqual({});
                done();
            });
        });
    });
    describe('subscribe', function () {
        it('should be defined', function () {
            expect(classUnderTest.subscribe).toBeDefined();
        });
        it('should return empty Observable', function (done) {
            classUnderTest.subscribe().subscribe(function (result) {
                expect(result).toEqual({});
                done();
            });
        });
    });
    describe('dismiss', function () {
        it('should be defined', function () {
            expect(classUnderTest.dismiss).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.dismiss().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('onDidDismiss', function () {
        it('should be defined', function () {
            expect(classUnderTest.onDidDismiss).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.onDidDismiss().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('onWillDismiss', function () {
        it('should be defined', function () {
            expect(classUnderTest.onWillDismiss).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.onWillDismiss().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('contentRef', function () {
        it('should be defined', function () {
            expect(classUnderTest.contentRef).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.contentRef().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
//# sourceMappingURL=view-controller.spec.js.map
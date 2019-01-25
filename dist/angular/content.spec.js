"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('Content', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new _1.ContentMock();
    });
    describe('contentBottom', function () {
        it('should be defined', function () {
            expect(classUnderTest.contentBottom).toBeDefined();
        });
        it('should return 10', function () {
            expect(classUnderTest.contentBottom).toEqual(10);
        });
    });
    describe('contentHeight', function () {
        it('should be defined', function () {
            expect(classUnderTest.contentHeight).toBeDefined();
        });
        it('should return 10', function () {
            expect(classUnderTest.contentHeight).toEqual(10);
        });
    });
    describe('contentTop', function () {
        it('should be defined', function () {
            expect(classUnderTest.contentTop).toBeDefined();
        });
        it('should return 10', function () {
            expect(classUnderTest.contentTop).toEqual(10);
        });
    });
    describe('directionX', function () {
        it('should be defined', function () {
            expect(classUnderTest.directionX).toBeDefined();
        });
        it('should should return "left"', function () {
            expect(classUnderTest.directionX).toEqual('left');
        });
    });
    describe('directionY', function () {
        it('should be defined', function () {
            expect(classUnderTest.directionY).toBeDefined();
        });
        it('should should return "up"', function () {
            expect(classUnderTest.directionY).toEqual('up');
        });
    });
    describe('isScrolling', function () {
        it('should be defined', function () {
            expect(classUnderTest.isScrolling).toBeDefined();
        });
        it('should return false', function () {
            expect(classUnderTest.isScrolling).toBe(false);
        });
    });
    describe('scrollHeight', function () {
        it('should be defined', function () {
            expect(classUnderTest.scrollHeight).toBeDefined();
        });
        it('should return 10', function () {
            expect(classUnderTest.scrollHeight).toEqual(10);
        });
    });
    describe('scrollLeft', function () {
        it('should be defined', function () {
            expect(classUnderTest.scrollLeft).toBeDefined();
        });
        it('should return 10', function () {
            expect(classUnderTest.scrollLeft).toEqual(10);
        });
    });
    describe('scrollTop', function () {
        it('should be defined', function () {
            expect(classUnderTest.scrollTop).toBeDefined();
        });
        it('should return 10', function () {
            expect(classUnderTest.scrollTop).toEqual(10);
        });
    });
    describe('scrollWidth', function () {
        it('should be defined', function () {
            expect(classUnderTest.scrollWidth).toBeDefined();
        });
        it('should return 10', function () {
            expect(classUnderTest.scrollWidth).toEqual(10);
        });
    });
    describe('getContentDimensions', function () {
        it('should be defined', function () {
            expect(classUnderTest.getContentDimensions).toBeDefined();
        });
        it('should return empty Object', function () {
            expect(classUnderTest.getContentDimensions()).toEqual({});
        });
    });
    describe('scrollTo', function () {
        it('should be defined', function () {
            expect(classUnderTest.scrollTo).toBeDefined();
        });
        it('should return empty Promise', function (done) {
            classUnderTest.scrollTo().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('scrollToBottom', function () {
        it('should be defined', function () {
            expect(classUnderTest.scrollToBottom).toBeDefined();
        });
        it('should return empty Promise', function (done) {
            classUnderTest.scrollToBottom().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('scrollToTop', function () {
        it('should be defined', function () {
            expect(classUnderTest.scrollToTop).toBeDefined();
        });
        it('should return empty Promise', function (done) {
            classUnderTest.scrollToTop().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
//# sourceMappingURL=content.spec.js.map
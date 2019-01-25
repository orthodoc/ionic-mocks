"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alert_1 = require("./alert");
describe('AlertMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new alert_1.AlertMock();
    });
    it('should initialize', function () {
        expect(classUnderTest).toBeDefined();
    });
    describe('present', function () {
        it('should be defined', function () {
            expect(classUnderTest.present).toBeDefined();
        });
        it('should return empty promise', function (done) {
            classUnderTest.present().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('dismiss', function () {
        it('should be defined', function () {
            expect(classUnderTest.dismiss).toBeDefined();
        });
    });
    describe('onDidDismiss', function () {
        it('should be defined', function () {
            expect(classUnderTest.onDidDismiss).toBeDefined();
        });
    });
});
//# sourceMappingURL=alert.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loading_1 = require("./loading");
describe('LoadingMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new loading_1.LoadingMock();
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
});
//# sourceMappingURL=loading.spec.js.map
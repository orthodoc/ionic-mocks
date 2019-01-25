"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_sheet_1 = require("./action-sheet");
describe('ActionSheetMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new action_sheet_1.ActionSheetMock();
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
        it('should return empty promise', function (done) {
            classUnderTest.dismiss().then(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
//# sourceMappingURL=action-sheet.spec.js.map
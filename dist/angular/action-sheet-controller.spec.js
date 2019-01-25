"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_sheet_controller_1 = require("./action-sheet-controller");
var action_sheet_1 = require("./action-sheet");
describe('ActionSheetControllerMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new action_sheet_controller_1.ActionSheetControllerMock();
    });
    it('should initialize', function () {
        expect(classUnderTest).toBeDefined();
    });
    describe('create', function () {
        it('should exist', function () {
            expect(classUnderTest.create).toBeDefined();
        });
        it('should return an ActionSheet', function () {
            var result = classUnderTest.create();
            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });
        it('should return passed ActionSheet', function () {
            var actionSheet = new action_sheet_1.ActionSheetMock();
            classUnderTest = new action_sheet_controller_1.ActionSheetControllerMock(actionSheet);
            var result = classUnderTest.create();
            expect(result).toBe(actionSheet);
        });
    });
});
//# sourceMappingURL=action-sheet-controller.spec.js.map
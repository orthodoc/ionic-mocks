"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alert_1 = require("./alert");
var alert_controller_1 = require("./alert-controller");
describe('AlertControllerMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new alert_controller_1.AlertControllerMock();
    });
    it('should initialize', function () {
        expect(classUnderTest).toBeDefined();
    });
    describe('create', function () {
        it('should exist', function () {
            expect(classUnderTest.create).toBeDefined();
        });
        it('should return an Alert', function () {
            var result = classUnderTest.create();
            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });
        it('should return passed Alert', function () {
            var actionSheet = new alert_1.AlertMock();
            classUnderTest = new alert_controller_1.AlertControllerMock(actionSheet);
            var result = classUnderTest.create();
            expect(result).toBe(actionSheet);
        });
    });
});
//# sourceMappingURL=alert-controller.spec.js.map
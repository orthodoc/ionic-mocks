"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_1 = require("./form");
describe('Form', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new form_1.FormMock();
    });
    describe('register', function () {
        it('should be defined', function () {
            expect(classUnderTest.register).toBeDefined();
        });
    });
    describe('deregister', function () {
        it('should be defined', function () {
            expect(classUnderTest.deregister).toBeDefined();
        });
    });
    describe('setAsFocused', function () {
        it('should be defined', function () {
            expect(classUnderTest.setAsFocused).toBeDefined();
        });
    });
    describe('unsetAsFocused', function () {
        it('should be defined', function () {
            expect(classUnderTest.unsetAsFocused).toBeDefined();
        });
    });
    describe('tabFocus', function () {
        it('should be defined', function () {
            expect(classUnderTest.tabFocus).toBeDefined();
        });
    });
    describe('nextId', function () {
        it('should be defined', function () {
            expect(classUnderTest.nextId).toBeDefined();
        });
        it('should return 0', function () {
            expect(classUnderTest.nextId()).toEqual(0);
        });
    });
});
//# sourceMappingURL=form.spec.js.map
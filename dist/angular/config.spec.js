"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
describe('Config', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new config_1.ConfigMock();
    });
    describe('get', function () {
        it('should be defined', function () {
            expect(classUnderTest.get).toBeDefined();
        });
        it('should return empty string', function () {
            expect(classUnderTest.get()).toEqual('');
        });
    });
    describe('getBoolean', function () {
        it('should be defined', function () {
            expect(classUnderTest.getBoolean).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.getBoolean()).toEqual(true);
        });
    });
    describe('getNumber', function () {
        it('should be defined', function () {
            expect(classUnderTest.getNumber).toBeDefined();
        });
        it('should return 0', function () {
            expect(classUnderTest.getNumber()).not.toBeNaN();
        });
    });
    describe('set', function () {
        it('should be defined', function () {
            expect(classUnderTest.set).toBeDefined();
        });
    });
    describe('settings', function () {
        it('should be defined', function () {
            expect(classUnderTest.settings).toBeDefined();
        });
    });
    describe('setModeConfig', function () {
        it('should be defined', function () {
            expect(classUnderTest.setModeConfig).toBeDefined();
        });
    });
    describe('getModeConfig', function () {
        it('should be defined', function () {
            expect(classUnderTest.getModeConfig).toBeDefined();
        });
    });
    describe('setTransition', function () {
        it('should be defined', function () {
            expect(classUnderTest.setTransition).toBeDefined();
        });
    });
    describe('getTransition', function () {
        it('should be defined', function () {
            expect(classUnderTest.getTransition).toBeDefined();
        });
    });
});
//# sourceMappingURL=config.spec.js.map
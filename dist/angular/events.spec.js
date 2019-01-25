"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("./events");
describe('events', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = events_1.EventsMock.instance();
    });
    describe('subscribe', function () {
        it('should be defined', function () {
            expect(classUnderTest.subscribe).toBeDefined();
        });
    });
    describe('publish', function () {
        it('should be defined', function () {
            expect(classUnderTest.publish).toBeDefined();
        });
    });
    describe('unsubscribe', function () {
        it('should be defined', function () {
            expect(classUnderTest.unsubscribe).toBeDefined();
        });
    });
});
//# sourceMappingURL=events.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("./platform");
describe('PlatformMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = new platform_1.PlatformMock();
    });
    describe('dir', function () {
        it('should be defined', function () {
            expect(classUnderTest.dir).toBeDefined();
        });
        it('should return empty string', function () {
            expect(classUnderTest.dir()).toEqual('');
        });
    });
    describe('getQueryParam', function () {
        it('should be defined', function () {
            expect(classUnderTest.getQueryParam).toBeDefined();
        });
        it('should return empty string', function () {
            expect(classUnderTest.getQueryParam()).toEqual('');
        });
    });
    describe('height', function () {
        it('should be defined', function () {
            expect(classUnderTest.height).toBeDefined();
        });
        it('should return 0', function () {
            expect(classUnderTest.height()).toEqual(0);
        });
    });
    describe('is', function () {
        it('should be defined', function () {
            expect(classUnderTest.is).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.is()).toEqual(true);
        });
    });
    describe('isLandscape', function () {
        it('should be defined', function () {
            expect(classUnderTest.isLandscape).toBeDefined();
        });
        it('should return false', function () {
            expect(classUnderTest.isLandscape()).toEqual(false);
        });
    });
    describe('isPortrait', function () {
        it('should be defined', function () {
            expect(classUnderTest.isPortrait).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.isPortrait()).toBe(true);
        });
    });
    describe('isRTL', function () {
        it('should be defined', function () {
            expect(classUnderTest.isRTL).toBeDefined();
        });
        it('should return false', function () {
            expect(classUnderTest.isRTL()).toBe(false);
        });
    });
    describe('lang', function () {
        it('should be defined', function () {
            expect(classUnderTest.lang).toBeDefined();
        });
        it('should return en', function () {
            expect(classUnderTest.lang()).toEqual('en');
        });
    });
    describe('pause', function () {
        it('should be defined', function () {
            expect(classUnderTest.pause).toBeDefined();
        });
    });
    describe('platforms', function () {
        it('should be defined', function () {
            expect(classUnderTest.platforms).toBeDefined();
        });
        it('should be empty', function () {
            expect(classUnderTest.platforms()).toEqual([]);
        });
    });
    describe('ready', function () {
        it('should be defined', function () {
            expect(classUnderTest.ready).toBeDefined();
        });
        it('should be empty', function (done) {
            classUnderTest.ready().then(function (result) {
                expect(result).toBeUndefined(result);
                done();
            });
        });
    });
    describe('registerBackButtonAction', function () {
        it('should be defined', function () {
            expect(classUnderTest.registerBackButtonAction).toBeDefined();
        });
        it('should return Function', function () {
            expect(classUnderTest.registerBackButtonAction()).toEqual(jasmine.any(Function));
        });
    });
    describe('registerListener', function () {
        it('should be defined', function () {
            expect(classUnderTest.registerListener).toBeDefined();
        });
        it('should return function', function () {
            expect(classUnderTest.registerListener()).toEqual(jasmine.any(Function));
        });
    });
    describe('resize', function () {
        it('should be defined', function () {
            expect(classUnderTest.resize).toBeDefined();
        });
    });
    describe('resume', function () {
        it('should be defined', function () {
            expect(classUnderTest.resume).toBeDefined();
        });
    });
    describe('setDir', function () {
        it('should be defined', function () {
            expect(classUnderTest.setDir).toBeDefined();
        });
    });
    describe('setLang', function () {
        it('should be defined', function () {
            expect(classUnderTest.setLang).toBeDefined();
        });
    });
    describe('testUserAgent', function () {
        it('should be defined', function () {
            expect(classUnderTest.testUserAgent).toBeDefined();
        });
    });
    describe('url', function () {
        it('should be defined', function () {
            expect(classUnderTest.url).toBeDefined();
        });
        it('should return empty string', function () {
            expect(classUnderTest.url()).toEqual('');
        });
    });
    describe('versions', function () {
        it('should be defined', function () {
            expect(classUnderTest.versions).toBeDefined();
        });
        it('should return object', function () {
            expect(classUnderTest.versions()).toEqual({});
        });
    });
    describe('width', function () {
        it('should be defined', function () {
            expect(classUnderTest.width).toBeDefined();
        });
        it('should return 0', function () {
            expect(classUnderTest.width()).toEqual(0);
        });
    });
    describe('doc', function () {
        it('should be defined', function () {
            expect(classUnderTest.doc).toBeDefined();
        });
    });
    describe('win', function () {
        it('should be defined', function () {
            expect(classUnderTest.win).toBeDefined();
        });
    });
    describe('getActiveElement', function () {
        it('should be defined', function () {
            expect(classUnderTest.getActiveElement).toBeDefined();
        });
    });
    describe('raf', function () {
        it('should be defined', function () {
            expect(classUnderTest.raf).toBeDefined();
        });
    });
    describe('hasFocus', function () {
        it('should be defined', function () {
            expect(classUnderTest.hasFocus).toBeDefined();
        });
        it('should return true', function () {
            expect(classUnderTest.hasFocus()).toBeTruthy();
        });
    });
    describe('getElementComputedStyle', function () {
        it('should be defined', function () {
            expect(classUnderTest.getElementComputedStyle).toBeDefined();
        });
        it('should return styles object', function () {
            expect(classUnderTest.getElementComputedStyle()).toEqual(jasmine.objectContaining({
                paddingLeft: '10',
                paddingTop: '10',
                paddingRight: '10',
                paddingBottom: '10'
            }));
        });
    });
    describe('timeout', function () {
        it('should be defined', function () {
            expect(classUnderTest.timeout).toBeDefined();
        });
        it('should return function', function () {
            expect(classUnderTest.timeout()).toEqual(jasmine.any(Function));
        });
    });
});
//# sourceMappingURL=platform.spec.js.map
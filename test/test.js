const { cv, cvTranslateError } = require('../');
const path = require('path');
const { assert } = require('chai');
const { execSync } = require("child_process");

describe('opencv-wasm', function () {
    this.timeout(20000);

    it('can be loaded', function () {
        assert.isObject(cv);
        assert.isFunction(cvTranslateError);
    });

    it('runs dilation example', function () {
        execSync('node ./examples/dilation.js');
    });

    it('runs template matching example', function () {
        execSync('node ./examples/templateMatching.js');
    });
});

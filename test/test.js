const { cv, cvTranslateError } = require('../');
const path = require('path');
const { assert } = require('chai');

describe('opencv-wasm', function () {
    it('can be loaded', function () {
        assert.isObject(cv);
        assert.isFunction(cvTranslateError);
    });
});

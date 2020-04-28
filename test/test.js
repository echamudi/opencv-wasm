const { cv, cvTranslateError } = require('../');
const fs = require('fs');
const { assert } = require('chai');
const { execSync } = require("child_process");
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

describe('opencv-wasm', function () {
    this.timeout(20000);

    it('can be loaded', function () {
        assert.isObject(cv);
        assert.isFunction(cvTranslateError);
    });

    it('runs dilation example', function () {
        execSync('node ./examples/dilation.js');
        const expectedOutput = PNG.sync.read(fs.readFileSync('./examples/expected-output/dilation.png'));
        const testOutput = PNG.sync.read(fs.readFileSync('./examples/test-output/dilation.png'));

        const pixelmatchResult = pixelmatch(expectedOutput.data, testOutput.data, null, expectedOutput.width, expectedOutput.height, {threshold: 0.01});
        assert.deepStrictEqual(pixelmatchResult, 0);
    });

    it('runs template matching example', function () {
        execSync('node ./examples/templateMatching.js');
        const expectedOutput = PNG.sync.read(fs.readFileSync('./examples/expected-output/template-matching.png'));
        const testOutput = PNG.sync.read(fs.readFileSync('./examples/test-output/template-matching.png'));

        const pixelmatchResult = pixelmatch(expectedOutput.data, testOutput.data, null, expectedOutput.width, expectedOutput.height, {threshold: 0.01});
        assert.deepStrictEqual(pixelmatchResult, 0);
    });
});

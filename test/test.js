const { cv, cvTranslateError } = require('../');
const assert = require('assert');
const path = require('path');
const chai = require('chai');

describe('opencv-wasm', function() {
    it('can be loaded', function() {
        chai.expect(cv).to.be.an('object');
        chai.expect(cvTranslateError).to.be.a('function');
    });
});

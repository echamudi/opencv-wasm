// @ts-check

const fs = require('fs');
const path = require('path');

const openCvJs = fs.readFileSync(path.join(__dirname, './build_wasm/bin/opencv.js'), 'utf-8');


// Generate opencv.wasm
const matchResult = openCvJs.match(/var wasmBinaryFile="(.*?)";/gs);

if (matchResult == null) {
    throw new Error('WASM Base64 is not found');
} 

const wasmBase64 = matchResult[0].replace('var wasmBinaryFile="data:application/octet-stream;base64,', '').replace('";', '');

fs.writeFileSync(path.join(__dirname, './build_wasm/bin/opencv.wasm'), wasmBase64, {encoding: 'base64'});
console.log('Generated OpenCV.wasm');


// Generate opencv-bin.js
const opencvBin = `
export const bin = 'data:application/octet-stream;base64,${wasmBase64}';
`;
fs.writeFileSync(path.join(__dirname, './build_wasm/bin/opencv-bin.js'), opencvBin, {encoding: 'utf8'});
console.log('Generated opencv-bin.js');


// Replace the data with opencvWasmBinaryFile variable
const openCvJsNew = openCvJs.replace(/var wasmBinaryFile="(.*?)";/, 'var wasmBinaryFile=opencvWasmBinaryFile;');


// Add modifications for node.js code
let openCvJsNode = openCvJsNew;

openCvJsNode =
`
let Module = {};
let opencvWasmBinaryFile = './opencv.wasm';

${openCvJsNode}`;
fs.writeFileSync(path.join(__dirname, './build_wasm/bin/opencv.js'), openCvJsNode, {encoding: 'utf8'});
console.log('Updated opencv.js');


// Add modifications for deno code
let openCvJsDeno = openCvJsNew;
openCvJsDeno = openCvJsDeno.replace(/\}\(this, function \(\) \{/, '}($this, function () {');

openCvJsDeno = `
import { bin } from './opencv-bin.js';

let Module = {};
let TextDecoder = undefined;
let document = {};

let opencvWasmBinaryFile = bin;
let $this = {};

${openCvJsDeno}

const cv = $this.cv;
export { cv };
`;

fs.writeFileSync(path.join(__dirname, './build_wasm/bin/opencv-deno.js'), openCvJsDeno, {encoding: 'utf8'});
console.log('Added opencv-deno.js');

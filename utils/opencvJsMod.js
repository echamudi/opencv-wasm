const fs = require('fs');
const path = require('path');

const openCvJs = fs.readFileSync(path.join(__dirname, './build_wasm/bin/opencv.js'), 'utf-8');

// Update opencv.js
const openCvJsNew =
`let Module = {};

${openCvJs}`;

fs.writeFileSync(path.join(__dirname, './build_wasm/bin/opencv.js'), openCvJsNew, {encoding: 'utf8'});
console.log('Updated opencv.js (2)');

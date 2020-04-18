const fs = require('fs');

var wasmBinaryFile = "<base64 text without header>"

fs.writeFile('./opencv.wasm', wasmBinaryFile, {encoding: 'base64'}, function(err) {
    console.log('File created');
});

const { cv } = require('../.');
const fs = require('fs');

const removeProps = [
    // Invalid item
    'arguments',
];

let keys = Object.keys(cv);

let result = '';
keys.forEach(key => {
    if (removeProps.indexOf(key) !== -1) return;

    // @ts-ignore
    let type = typeof cv[key];

    if (type === 'string' || type === 'number' || type === 'boolean') {
        result += `export var ${key}: ${type};\n`;
    } else if (type === 'function') {
        console.log(key);
        result += `export var ${key}: any; // ${type}\n`;
    } else if (type === 'object') {
        result += `export var ${key}: any; // ${type}\n`;
    } else if (type === 'undefined') {
        result += `export var ${key}: any; // ${type}\n`;
    } else {
        throw new Error(key + ' ' + type);
    }

});

fs.writeFileSync('./opencv.d.ts', result, { encoding: 'utf8' });

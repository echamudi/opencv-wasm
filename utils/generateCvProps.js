const { cv } = require('../.');
const fs = require('fs');

const removeProps = [
    // Invalid item
    'arguments',
];

let keys = Object.keys(cv);

let result = '';
result += `// Generated types by generateCvProps.js, don't edit this file\n`;
result += `\n`;
result += `\n`;

keys.forEach(key => {
    if (removeProps.indexOf(key) !== -1) return;

    // @ts-ignore
    let type = typeof cv[key];

    if (type === 'string' || type === 'number' || type === 'boolean') {
        result += `export var ${key}: ${type};\n`;
    } else if (type === 'function') {
        result += `\n`;
        result += `/** function */\n`;
        result += `export var ${key}: any;\n`;
    } else if (type === 'object') {
        result += `\n`;
        result += `/** object */\n`;
        result += `export var ${key}: any;\n`;
    } else if (type === 'undefined') {
        result += `\n`;
        result += `/** undefined */\n`;
        result += `export var ${key}: any;\n`;
    } else {
        throw new Error(key + ' ' + type);
    }

});

fs.writeFileSync('./opencv.d.ts', result, { encoding: 'utf8' });

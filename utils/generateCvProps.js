const { cv } = require('../.');
const fs = require('fs');

const removeProps = [
    // Invalid item
    'arguments',
];

let keys = Object.keys(cv);

let result = '';
keys.forEach(key => {
    /** @type {any} */
    // @ts-ignore
    let type = typeof cv[key];
    let comment = '';

    if (removeProps.indexOf(key) !== -1) comment = '// ';

    if (type !== 'string' && type !== 'number') type = 'any';

    result += `${comment}export var ${key}: ${type};\n`;
});

fs.writeFileSync('./all-cv-prop.d.ts', result, { encoding: 'utf8' });

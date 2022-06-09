const items = require('./arrays');
const flatten = require('./flatten');

const nestedArray = [1, [2], [[3]], [[[4]]]]; 

console.log(flatten(nestedArray));
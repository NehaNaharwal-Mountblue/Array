const iteams = require('./arrays');
const filter = require('./filter')

cb = ( x ) => x === 1 ? true : false;

console.log(filter([1,2,2,4,5], cb))
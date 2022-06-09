const items = require('./arrays');
const find = require('./find');

cb = ( x ) => x === 1 ? true : false;
console.log(find([1,2,3,4,5,5], cb));
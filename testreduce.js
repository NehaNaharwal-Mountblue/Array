const items = require('./arrays');
const reduce = require('./reduce');

cb = ( reduced, value ) => reduced += value;

console.log(reduce([1,2,3,4,5], cb));
console.log(reduce([6,7,8,9,10], cb));
console.log(reduce([], cb));
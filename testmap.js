const items = require('./arrays');
const map = require('./map');


console.log(map([1,2,3,4], x=> x*2));
console.log(map([5,6,7,8], x=> x*2));
console.log(map([1,2], x=> x*2));
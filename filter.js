const items = require('./arrays')

function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  let filtered =[];
  for ( let element of elements ){
    cb(element) ? filtered.push(element) : null;
  }
  return filtered;
}

module.exports = filter;



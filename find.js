const items = require('./arrays')

function find(elements, cb) {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  let found = undefined;
  for ( let i = 0; i < elements.length; ++i) {
    if ( cb(elements[i]) ) { return found = elements[i] }
  }
  return found;
}

module.exports = find;


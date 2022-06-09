const items = require('./arrays')

function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.


    let index = startingValue || 0;
    const combines = elements[index];
    let reduced = combines;
    for ( let i = index+1; i < elements.length; ++i ) {
      reduced = cb(reduced, elements[i] )
    }
    return reduced;
  }

  module.exports = reduce;

  cb = ( reduced, value ) => reduced += value;
  // console.log(reduce([1,2,3,4,5], cb));
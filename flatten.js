const items = require('./arrays')


function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
    let toFlatten = [];
  
    function removeArray (i) {
      Array.isArray(i) ? checkItems(i) : toFlatten.push(i); 
    }
  
    function checkItems ( array ) {
      for( let i of array ) {
        removeArray(i);
      }
    }
  
    checkItems(elements);
    return toFlatten;
}

module.exports = flatten;


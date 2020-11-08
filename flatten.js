/* Take in an array containing elements including nested arrays of elements,
 * and return a "flattened" version of the array */
const flatten = (nestedArray) => {
  let output = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        output.push(nestedArray[i][j]);
      }
    } else {
      output.push(nestedArray[i]);
    }
  }
  return output;
};

module.exports = flatten;
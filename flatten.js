/* Take in an array containing elements including nested arrays of elements, 
 * and return a "flattened" version of the array */

const flatten = (nestedArray) => {
  let output = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        output.push(nestedArray[i][j])
      }
    } else {
      output.push(nestedArray[i]);
    }
  }
  return output;
};

console.log(flatten([1, [2, 3], 4, [5, 6, 7], [], 8]))



// Helper functions for arrays
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  let len = arr1.length;
  if (len !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true; 
};
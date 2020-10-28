// Helper functions to check output of main function is correct
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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

const middle = function(array) {
  const arrayLength = array.length
  const middleIndex = arrayLength / 2;
  if (arrayLength <= 2) {
    return []
  } else if (arrayLength % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]]
  } else {
    return [array[Math.floor(middleIndex)]]
  }
}


// TEST CASES
assertArraysEqual(middle([1]), []); // Pass
assertArraysEqual(middle([1, 2]), []); // Pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Pass

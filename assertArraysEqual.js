
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  let len = arr1.length;
  if (len === arr2.length) {
    for (let i = 0; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


// TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1], [1]); // pass
assertArraysEqual([], []); // pass
assertArraysEqual([1, 2, "3"], [1, 2, "3"]); // pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // fail
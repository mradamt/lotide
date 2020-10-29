// Helper functions
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


// Returns a "slice of the array with elements taken from the beginning."
const takeUntil = function(array, callback) {
  const clippedArray = [];
  for (const element of array) {
    if (callback(element)) {
      return clippedArray;
    } else {
      clippedArray.push(element);
    }
  }
};


// TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const func1 = x => x < 0;
assertArraysEqual(takeUntil(data1, func1), [ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const func2 = x => x === ',';
assertArraysEqual(takeUntil(data2, func2), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const func3 = x => x > 5;
assertArraysEqual(takeUntil(data3, func3), [0, 1, 2, 3, 4, 5]);


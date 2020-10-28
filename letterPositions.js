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


const letterPositions = function(string) {
  const result = {};
  const noSpaces = string.split(" ").join("");
  for (let i = 0; i < noSpaces.length; i++) {
    if (result[noSpaces[i]]) {
      result[noSpaces[i]].push(i);
    } else {
      result[noSpaces[i]] = [i];
    }
  }
  return result;
};


// console.log(letterPositions("monkeys can climb"))
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("monkeys can climb").c, [7, 10]);
assertArraysEqual(letterPositions("monkeys can climb").m, [0, 13]);



const map = function(array, callback) {
  const results = [];
  for (const item of array) {
      results.push(callback(item))
    }
  return results;
}


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


// TEST CODE
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

const test1 = ["ground", "control", "to", "major", "tom"];
const func1 = x => x[0];
const result1 = [ 'g', 'c', 't', 'm', 't' ];
assertArraysEqual(map(test1, func1), result1);

assertArraysEqual(map(["foo", "bar", "baz"], x => x.toUpperCase()), ["FOO", "BAR", "BAZ"]);
assertArraysEqual(map([1, 2, 3, 4], x => x * 2), [2, 4, 6, 8]);
assertArraysEqual(map([], x => "placeholder"), []);


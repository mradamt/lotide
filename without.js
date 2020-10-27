

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

// TUESDAY: is there a way to make this function cleaner??
const without = (source, itemsToRemove) => {
  const out = [];
  for (const s of source) {
    let found = 0;
    for (const i of itemsToRemove) {
      if (s === i) {
        found = 1;
        break;
      }
    }

    if (found === 0) {
      out.push(s);
    }
  }
  return out;
};


// console.log(without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"])
assertArraysEqual(without(["foo", "bar"], ["baz"]), ["foo", "baz"])
assertArraysEqual(without([], ["baz"]), [])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

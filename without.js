// ... is there a way to make this function cleaner??
const without = (source, itemsToRemove) => {
  const out = [];
  for (const s of source) {
    let found = false;
    for (const i of itemsToRemove) {
      if (s === i) {
        found = true;
        break;
      }
    }

    if (!found) {
      out.push(s);
    }
  }
  return out;
};


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
  } else {
    for (let i = 0; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }  
    }
  }
  return true; 
};  

// console.log(without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // Pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // Pass
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]) // Pass
assertArraysEqual(without(["foo", "bar"], ["baz"]), ["foo", "baz"]) // Fail
assertArraysEqual(without([], ["baz"]), []) // Pass

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Pass

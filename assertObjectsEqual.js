const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  if (keys.length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of keys) {
    // console.log("object1[key]:", object1[key], "object2[key]:", object2[key])
    if (Array.isArray(object1[key])) {
      // console.log("isArray=TRUE:", object1[key])
      if (eqArrays(object1[key], object2[key])) { // If both arrays are equal (TRUE), break to next key
        break;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// Test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { c: "1", d: 1 };
assertObjectsEqual(cd, cd2); // false
assertObjectsEqual(cd2, dc2); // false
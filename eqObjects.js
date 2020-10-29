// Helper functions
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


// eqObjects takes in two objects and returns true or false, based on a perfect match
const eqObjects = function (object1, object2) {
  const keys = Object.keys(object1);
  if (keys.length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of keys) {
    // console.log("object1[key]:", object1[key], "object2[key]:", object2[key])
    if (Array.isArray(object1[key])) {
      // console.log("isArray=TRUE:", object1[key])
      if (eqArrays(object1[key], object2[key])) {
      //   return false;
      // } else {
        break;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}


// TEST CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true)
// console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false)
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true)

const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { c: "1", d: 1 };
assertEqual(eqObjects(cd, cd2), false)
assertEqual(eqObjects(cd2, dc2), false)
// console.log(eqObjects(cd, dc))
// console.log(eqObjects(cd2, dc2))

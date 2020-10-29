const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// findKeyByValue takes in an object and a value, scans the object and returns the first 
// key which contains the given value. If no key with that given value is found it returns undefined.
const findKeyByValue = function (obj, val) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  emptyString: "",
  zero: 0,
  bool: false,
};


// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), "emptyString");
assertEqual(findKeyByValue(bestTVShowsByGenre, 0), "zero");
assertEqual(findKeyByValue(bestTVShowsByGenre, false), "bool");

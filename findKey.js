// Helper functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/* Takes in an object and a callback. It should scan the object and return
 * the first key for which the callback returns a truthy value. If no key
 * is found, then it should return undefined. */
const findKey = (obj, callback) => {
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) {
      return key;
    }
  }
  return undefined;
};


// TEST CASES
const testArray = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result = findKey(testArray, x => x.stars === 2); // => "noma"

assertEqual(findKey(testArray, x => x.stars === 2), "noma");
assertEqual(findKey(testArray, x => x.stars === 3), "Akaleri");
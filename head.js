const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Return first element of an array
const head = (_array) => {return _array[0]}


// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hellooo", "Lighthouse", "Labs"]), "Hellooo");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["5"]), 5); // Should fail

// Helper function for results testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (string) {
  result = {};
  const noSpaces = string.split(" ").join("");
  for (const char of noSpaces) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result
}

// Test functions
// console.log(countLetters("lighthouse in the house"))
assertEqual(countLetters("lighthouse in the house")["h"], 4)
assertEqual(countLetters("lighthouse in the house").s, 2)
assertEqual(countLetters("lighthouse in the house").e, 3)
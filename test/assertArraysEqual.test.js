const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');


// TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1], [1]); // pass
assertArraysEqual([], []); // pass
assertArraysEqual([1, 2, "3"], [1, 2, "3"]); // pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // fail


// JUST IN CASE OF REFACTOR::: Assert Equal test cases...
// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
// assertEqual(assertArraysEqual([1], [1]), true);
// assertEqual(assertArraysEqual([], []), true);
// assertEqual(assertArraysEqual([1, 2, "3"], [1, 2, "3"]), true);
// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
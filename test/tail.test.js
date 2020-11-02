const assertEqual = require('../assertEqual')
const tail = require('../tail')

// TEST CASES
// console.log(tail([1, 2, 3, 4, 5]));

// Implicit, general test
const test1 = [1, 2, 3, 4, 5];
assertEqual(test1[1], tail(test1)[0]);
assertEqual(test1.length, tail(test1).length + 1);

// Explicit, specific test
const test2 = ["foo", "bar", "baz"];
// console.log(tail(test2));
assertEqual(tail(test2)[0], "bar");
assertEqual(tail(test2)[1], "baz");
assertEqual(test2.length, tail(test2).length + 1);

// Explicit, specific test
const test3 = ["baz"];
assertEqual(tail(test3)[0], undefined);
assertEqual(test3.length, tail(test3).length + 1);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

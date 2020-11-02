const assertEqual = require('../assertEqual')

// TEST CODE
assertEqual(1, 1); // true
assertEqual(1, "1"); // false
assertEqual(1, 2); // false
assertEqual(1, 3); // false
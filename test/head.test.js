const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hellooo", "Lighthouse", "Labs"]), "Hellooo");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["5"]), 5); // Should fail

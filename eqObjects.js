const eqArrays = require('./eqArrays');

// eqObjects takes in two objects and returns true or false, based on a perfect match
const eqObjects = function(object1, object2) {
  // Check if both objects have the same number of properties
  const keys = Object.keys(object1);
  if (keys.length !== Object.keys(object2).length) {
    return false;
  }
  // Compare properties of each object
  for (const key of keys) {
    // If both arrays are equal (TRUE), break to next key (don't do strict equal check)
    if (Array.isArray(object1[key]) && eqArrays(object1[key], object2[key])) {
      break;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;
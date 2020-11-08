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
    // If both values are arrays and are equal, break to next key (skip further checks)
    if (Array.isArray(object1[key]) && eqArrays(object1[key], object2[key])) {
      break;
    }
    
    // If both values are objects and not arrays, call eqObjects on these objects
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key]) &&
        typeof object2[key] === 'object' && !Array.isArray(object2[key])) {
      
      if (eqObjects(object1[key], object2[key])) {
        break;
      }
    }

    // This pair of values can be strictly compared to each other
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  // All key-value pairs of all nested objects (even if values are arrays) are equal
  return true;
};


module.exports = eqObjects;
const eqArrays = require('./eqArrays');

// eqObjects takes in two objects and returns true or false, based on a perfect match
const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  if (keys.length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of keys) {
    // console.log("object1[key]:", object1[key], "object2[key]:", object2[key])
    if (Array.isArray(object1[key])) {
      // console.log("isArray=TRUE:", object1[key])
      if (eqArrays(object1[key], object2[key])) { // If both arrays are equal (TRUE), break to next key
        break;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;
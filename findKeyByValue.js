// findKeyByValue takes in an object and a value, scans the object and returns the first
// key which contains the given value. If no key with that given value is found it returns undefined.
const findKeyByValue = function(obj, val) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};


module.exports = findKeyByValue;
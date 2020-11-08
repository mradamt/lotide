// Returns true/false if two arrays are/are not identical
const eqArrays = (arr1, arr2) => {
  // Check arrays have equal number of elements
  let len = arr1.length;
  if (len !== arr2.length) {
    return false;
  }

  // Compare values of each array
  for (let i = 0; i < len; i++) {
    // Check if these two array elements are themselves each arrays
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // Continue to next element if eqArrays returns true on these two sub-arrays
      if (eqArrays(arr1[i], arr2[i])) {
        continue;
      }
    }

    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;

const middle = function(array) {
  const arrayLength = array.length
  const middleIndex = arrayLength / 2;
  if (arrayLength <= 2) {
    return []
  } else if (arrayLength % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]]
  } else {
    return [array[Math.floor(middleIndex)]]
  }
}


module.exports = middle;
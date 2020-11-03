const letterPositions = function(string) {
  const result = {};
  const noSpaces = string.split(" ").join("");
  for (let i = 0; i < noSpaces.length; i++) {
    if (result[noSpaces[i]]) {
      result[noSpaces[i]].push(i);
    } else {
      result[noSpaces[i]] = [i];
    }
  }
  return result;
};


module.exports = letterPositions;


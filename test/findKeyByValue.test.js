const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// Test object to work with
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  emptyString: "",
  zero: 0,
  bool: false,
};


describe("#findKeyByValue", () => {
  it("returns drama for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for (bestTVShowsByGenre, 'That '70s Show')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns 'emptyString' for (bestTVShowsByGenre, '')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), "emptyString");
  });

  it("returns 'zero' for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 0), 'zero');
  });

  it("returns 'bool' for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, false), 'bool');
  });
});
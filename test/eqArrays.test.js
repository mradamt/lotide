const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for equal arrays of numbers)", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  
  it("returns false for arrays with same data but different order))", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  
  it('returns true for equal arrays of strings)', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  
  it('returns false for arrays of equal implicit values but different data types)', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  
  it('returns true for equal arrays with mixed data types)', () => {
    assert.strictEqual(eqArrays([1, 2, 3, "ffo"], [1, 2, 3, "ffo"]), true);
  });
});
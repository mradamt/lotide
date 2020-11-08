const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for equal arrays of numbers)", () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    assert.strictEqual(eqArrays(a, b), true);
  });
  
  it("returns false for arrays with same data but different order))", () => {
    const a = [1, 2, 3];
    const b = [3, 2, 1];
    assert.strictEqual(eqArrays(a, b), false);
  });
  
  it('returns true for equal arrays of strings)', () => {
    const a = ["1", "2", "3"];
    const b = ["1", "2", "3"];
    assert.strictEqual(eqArrays(a, b), true);
  });
  
  it('returns false for arrays of equal implicit values but different data types)', () => {
    const a = ["1", "2", "3"];
    const b = ["1", "2", 3];
    assert.strictEqual(eqArrays(a, b), false);
  });
  
  it('returns true for equal arrays with mixed data types)', () => {
    const a = [1, 2, 3, "ffo"];
    const b = [1, 2, 3, "ffo"];
    assert.strictEqual(eqArrays(a, b), true);
  });

  it("returns true for equal arrays which include equal nested arrays)", () => {
    const a = [[2, 3], [4]];
    const b = [[2, 3], [4]];
    assert.strictEqual((eqArrays(a, b)), true);
  });

  it("returns false for arrays which include unequal nested arrays)", () => {
    const a = [[2, 3], [4]];
    const b = [[2, 3], [4, 5]];
    assert.strictEqual((eqArrays(a, b)), false);
  });

  it("returns false for arrays which include the same values but different nesting structures)", () => {
    const a = [[2, 3], [4]];
    const b = [[2, 3], 4];
    assert.strictEqual((eqArrays(a, b)), false);
  });
});
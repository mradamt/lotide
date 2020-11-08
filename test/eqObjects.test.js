const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it('returns true for equal objects with keys out of order', () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  }),
  
  it('returns false for objects with different number of keys', () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  }),

  it('returns true for equal objects containing equal arrays', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  }),

  it('returns false for equal objects containing unequal arrays', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  }),

  it('returns false for objects one with array one without', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3, 4] }, { c: "1", d: 1 }), false);
  });

  it('returns true for equal objects that have one layer of equal objects as values', () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  }),

  it('returns true for equal objects that have several layers of equal objects as values', () => {
    assert.equal(eqObjects({ a: {y: { z: 1 }, v: {w: {x: 33}}}, b: 2 }, { a: {v: {w: {x: 33}}, y: { z: 1 }}, b: 2 }), true);
  }),

  it('returns false for unequal objects that have several layers of equal objects as values, inequality at last key', () => {
    const a = { a: {y: { z: 1 }, v: {w: {x: 33}}}, b: 2 };
    const b = { a: {v: {w: {x: 33}}, y: { z: 1 }}, b: 3 }
    assert.equal(eqObjects(a, b), false);
  }),

  it('returns false for equal objects that have one layer of unequal objects as values', () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  }),

  it('returns false for equal objects, one with an object as a value, the other without', () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  })
});
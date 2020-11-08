const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it('returns true for equal objects with keys out of order', () => {
    const a = { a: "1", b: "2" };
    const b = { b: "2", a: "1" };
    assert.equal(eqObjects(a, b), true);
  }),
  
  it('returns false for objects with different number of keys', () => {
    const a = { a: "1", b: "2" };
    const b = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(a, b), false);
  }),

  it('returns true for equal objects containing equal arrays', () => {
    const a = { c: "1", d: ["2", 3] };
    const b = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(a, b), true);
  }),

  it('returns false for equal objects containing unequal arrays', () => {
    const a = { c: "1", d: ["2", 3] };
    const b = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(a, b), false);
  }),

  it('returns false for objects one with array one without', () => {
    const a = { c: "1", d: ["2", 3, 4] };
    const b = { c: "1", d: 1 };
    assert.strictEqual(eqObjects(a, b), false);
  });

  it('returns true for equal objects that have one layer of equal objects as values', () => {
    const a = { a: { z: 1 }, b: 2 };
    const b = { a: { z: 1 }, b: 2 };
    assert.equal(eqObjects(a, b), true);
  }),

  it('returns true for equal objects that have several layers of equal objects as values', () => {
    const a = { a: {y: { z: 1 }, v: {w: {x: 33}}}, b: 2 };
    const b = { a: {v: {w: {x: 33}}, y: { z: 1 }}, b: 2 };
    assert.equal(eqObjects(a, b), true);
  }),

  it('returns false for unequal objects that have several layers of equal objects as values, inequality at last key', () => {
    const a = { a: {y: { z: 1 }, v: {w: {x: 33}}}, b: 2 };
    const b = { a: {v: {w: {x: 33}}, y: { z: 1 }}, b: 3 };
    assert.equal(eqObjects(a, b), false);
  }),

  it('returns false for equal objects that have one layer of unequal objects as values', () => {
    const a = { a: { y: 0, z: 1 }, b: 2 };
    const b = { a: { z: 1 }, b: 2 };
    assert.equal(eqObjects(a, b), false);
  }),

  it('returns false for equal objects, one with an object as a value, the other without', () => {
    const a = { a: { y: 0, z: 1 }, b: 2 };
    const b = { a: 1, b: 2 };
    assert.equal(eqObjects(a, b), false);
  });
});
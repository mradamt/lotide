const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  }),

  it("returns ['bar', 'baz'] for ['foo', 'bar', 'baz']", () => {
    assert.deepEqual(tail(['foo', 'bar', 'baz']), ['bar', 'baz']);
  }),

  it("returns [] for ['foo']", () => {
    assert.deepEqual(tail(['foo']), []);
  }),

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
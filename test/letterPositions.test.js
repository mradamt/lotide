const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [2, 3] for letterPositions('hello').l", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  
  it("returns [4] for letterPositions('hello').o", () => {
    assert.deepEqual(letterPositions('hello').o, [4]);
  });

  it("returns [7, 10] for letterPositions('monkeys can climb').c", () => {
    assert.deepEqual(letterPositions('monkeys can climb').c, [7, 10]);
  });

  it("returns [0, 13] for letterPositions('monkeys can climb').m", () => {
    assert.deepEqual(letterPositions('monkeys can climb').m, [0, 13]);
  });
});
const assert = require('chai').assert
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [] for flatten([[]])", () => {
    assert.deepEqual(flatten([[]]), [])
  }); 

  it("returns [ 1 ] for flatten([[1]])", () => {
    assert.deepEqual(flatten([[1]]), [ 1 ])
  }); 
  
  it("returns [ 1, 2 ] for flatten([1, [2])", () => {
    assert.deepEqual(flatten([1, [2]]), [ 1, 2 ])
  }); 

  it("returns [ 1, 2, 3, 4, 5 ] for flatten([1, [2, 3], [4], [], 5]))", () => {
    assert.deepEqual(flatten([1, [2, 3], [4], [], 5]), [ 1, 2, 3, 4, 5 ])
  }); 

  it("returns [ 1, '2', 'foo' ] for flatten([1, ['2'], 'foo'])", () => {
    assert.deepEqual(flatten([1, ['2'], 'foo']), [ 1, '2', 'foo' ])
  }); 
});
const assert = require('chai').assert;
const countOnly = require('../countOnly');

// Array and object to use for testing
const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
const itemsToCount = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
};


describe("#countOnly", () => {
  it('returns 1 for countOnly(firstNames, itemsToCount).Jason', () => {
    assert.equal(countOnly(firstNames, itemsToCount).Jason, 1);
  }),

  it('returns undefined for countOnly(firstNames, itemsToCount).Karima', () => {
    assert.equal(countOnly(firstNames, itemsToCount).Karima, undefined);
  }),

  it('returns 2 for countOnly(firstNames, itemsToCount).Fang', () => {
    assert.equal(countOnly(firstNames, itemsToCount).Fang, 2);
  }),

  it('returns undefined for countOnly(firstNames, itemsToCount).Agouhanna', () => {
    assert.equal(countOnly(firstNames, itemsToCount).Agouhanna, undefined);
  });
});

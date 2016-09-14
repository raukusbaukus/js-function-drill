var assert = require('chai').assert;
var fn = require('../function.js');

describe('Simple Functions', function() {
  // define a function named 'nothing' that doesn't return anything
  it("shouldn't return anything", function() {
    assert.isUndefined(fn.nothing());
  });

  // define a function named 'true' that returns false
  it("shouldn't return anything", function() {
    assert.isFalse(fn.true());
  });

  // define a function named 'emptyString' that returns an empty string
  it("should return an empty string", function() {
    assert.equal('', fn.emptyString());
  });

  // define a function named 'hello' that returns the string "Hello, javascript!"
  it('should return the string "Hello, javascript!"', function() {
    assert.equal('Hello, javascript!', fn.hello());
  });

  // define a function named 'fnord' that returns the number 23
  it('should return the number 23', function() {
    assert.equal(23, fn.fnord());
  });

  // define a function named 'skiddoo' that returns the string "23 Skiddoo"
  it('should return the string "23 Skiddoo"', function() {
    assert.equal('23 Skiddoo', fn.skiddoo());
  });

  // define a function named 'emptyArray' that returns an empty array
  it("should be an empty array", function() {
    assert.deepEqual([], fn.emptyArray());
  });

  // define a function named 'fibArray' that returns an array containing the numbers 1, 1, 2, 3, 5, 8, 13
  it("should contain 1, 1, 2, 3, 4, 5, 6, 13", function() {
    assert.deepEqual([1, 1, 2, 3, 5, 8, 13], fn.fibArray());
  });

  // define a function named 'oddArray' that returns an array containing the numbers 1, 3, 5, 7, 9
  it("should contain 1, 3, 5, 7, 9", function() {
    assert.deepEqual([1, 3, 5, 7, 9], fn.oddArray());
  });


});

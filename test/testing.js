var assert = require ("chai").assert;
var checkAlgo = require("../lib/luhn");

describe("Number to array conversion", function () {
  it("should pass if number has been converted to an array.", function () {
    assert.deepEqual([7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3], checkAlgo.convertNumToArray(79927398713));
  });
});

describe("Reversing the array", function () {
  it("should pass if array has been reversed.", function () {
    assert.deepEqual([3, 1, 7, 8, 9, 3, 7, 2, 9, 9, 7], checkAlgo.reverseArray([7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3]))
  });
});

describe("Doubles every second index in array", function() {
  it("should pass if every second digit has been doubled, starting at index 0", function() {
    assert.deepEqual([2,1,2,1,2], checkAlgo.doubleSecondDigit([1,1,1,1,1]))
  })
});

describe("Collapse any numbers in an array with more than 1 digit", function() {
  it("should pass if any elements in the array with more than 1 digit have been collapsed", function () {
    assert.deepEqual([3, 2, 7, 7, 9, 6, 7, 4, 9, 9, 7], checkAlgo.collapseDoubleDigits([3, 2, 7, 16, 9, 6, 7, 13, 18, 9, 7]));
  });
});

describe("Sum all elements in an array", function () {
  it("should pass if the array sum is correct", function () {
    assert.equal(67, checkAlgo.sumArray([2, 7, 7, 9, 6, 7, 4, 9, 9, 7]));
  });
});

describe("Check last digit in array", function () {
  it("should pass if the last number in the array is correct", function () {
    assert.equal(7, checkAlgo.checkLastDigit([2, 7, 7, 9, 6, 7, 4, 9, 9, 7]));
  });
});

describe("Removes last digit from number", function () {
  it("should pass if the last digit has been removed", function () {
    assert.equal(123456,checkAlgo.removeLastDigit(1234567));
  });
});

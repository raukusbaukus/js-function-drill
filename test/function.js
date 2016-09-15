var assert = require('chai').assert;
var fn = require('../function.js');
var key = getKey();

describe('Simple Functions', function() {
  // define a function named 'nothing' that doesn't return anything
  it("shouldn't return anything", function() {
    assert.isUndefined(fn.nothing());
  });

  // define a function named 'true' that returns false
  it("should return false", function() {
    assert.isFalse(fn.true());
  });

  // define a function named 'emptyString' that returns an empty string
  it("should return an empty string", function() {
    assert.equal(key.emptyString, fn.emptyString());
  });

  // define a function named 'hello' that returns the string "Hello, javascript!"
  it('should return the string "Hello, javascript!"', function() {
    assert.equal(key.hello, fn.hello());
  });

  // define a function named 'fnord' that returns the number 23
  it('should return the number 23', function() {
    assert.equal(key.fnord, fn.fnord());
  });

  // define a function named 'skiddoo' that returns the string "23 Skiddoo"
  it('should return the string "23 Skiddoo"', function() {
    assert.equal(key.skiddoo, fn.skiddoo());
  });

  // define a function named 'emptyArray' that returns an empty array
  it("should be an empty array", function() {
    assert.deepEqual(key.emptyArray, fn.emptyArray());
  });

  // define a function named 'oddArray' that returns an array containing the numbers 1, 3, 5, 7, 9
  it("should contain 1, 3, 5, 7, 9", function() {
    assert.deepEqual(key.oddArray, fn.oddArray());
  });

  // define a function named 'fibArray' that returns an array containing the numbers 1, 1, 2, 3, 5, 8, 13
  it("should contain 1, 1, 2, 3, 4, 5, 6, 13", function() {
    assert.deepEqual(key.fibArray, fn.fibArray());
  });

  // define a function named 'tenThousand' that returns an array containing the
  //   first ten thousand positive integers, starting with 1
  it("should contain the first ten thousand positive integers", function() {
    assert.deepEqual(key.tenThousand, fn.tenThousand());
  });

  // define a function named 'emptyObject' that returns an empty object
  it("should return an empty object", function() {
    assert.deepEqual(key.emptyObject, fn.emptyObject());
  });

  // define a function named 'simpleObject' that returns the object { foo: "bar" }
  it("should return an object with the key 'foo' and the value 'bar'", function() {
    assert.deepEqual(key.simpleObject, fn.simpleObject());
  });

  // define a function named 'oddEvenObject' that returns the object {1:2, 3:4, 5:6, 7:8}
  it("should return an object with odd keys and even values from 1-8", function() {
    assert.deepEqual(key.oddEvenObject, fn.oddEvenObject());
  });

  // define a function named 'alphaObject' that returns an object with the lowercase
  //   letters of the alphabet as keys, and their number values as values (a=1, b=2, etc.)
  it("should return an object with letter keys and number values", function() {
    assert.deepEqual(key.alphaObject, fn.alphaObject());
  });

  // define a function named 'fiveArr' that returns an array of five empty objects
  it("should return an array of five empty objects", function() {
    assert.deepEqual(key.fiveArr, fn.fiveArr());
  });
});

describe('Basic Functions', function() {
  // define a function named 'itself' that takes an argument, and returns that argument
  it("should return the argument", function () {
    assert.deepEqual('foo', fn.itself('foo'));
    assert.deepEqual(12345, fn.itself(12345));
    assert.deepEqual(['abc','easyas','123'], fn.itself(['abc','easyas','123']));
    assert.deepEqual({never:'gonna',give:'you'}, fn.itself({never:'gonna',give:'you'}));
  });

  // define a function named 'plusOne' that takes an integer as an argument,
  //   and returns the next integer
  it("should return the next highest number", function() {
    assert.equal(1, fn.plusOne(0));
    assert.equal(667, fn.plusOne(666));
    assert.equal(-999, fn.plusOne(-1000));
  });

  // define a function named 'double' that takes a number and returns that number x 2
  it("should double a number", function() {
    assert.equal(2, fn.double(1));
    assert.equal(0, fn.double(0));
    assert.equal(1000, fn.double(500));
    assert.equal(-50, fn.double(-25));
    assert.equal(11, fn.double(5.5));
    assert.equal(0.25, fn.double(0.125));
  });

  // define a function named 'sub' that takes two arguments, and subtracts the
  //  second one from the first oddEvenObject
  it("should subtract two numbers", function() {
    assert.equal(1, fn.sub(6,5));
    assert.equal(-1, fn.sub(1000000,1000001));
    assert.equal(0, fn.sub(0,0));
    assert.equal(7, fn.sub(-14,-21));
    assert.equal(3.14, fn.sub(4,0.86));
  });

  // define a function named multfour that takes four arguments,
  //   and multiplies them all together
  it("should multiply four numbers", function() {
    assert.equal(1, fn.multfour(1,1,1,1));
    assert.equal(0, fn.multfour(123,0,242,-123));
    assert.equal(24, fn.multfour(1,2,3,4));
    assert.equal(16, fn.multfour(-2,-2,-2,-2));
    assert.equal(-4425343200, fn.multfour(123,456,789,-100));
    assert.equal(0.0625, fn.multfour(.5,.5,.5,.5));
  });

  // define a function named tripleString that takes a string as an argument,
  //   and returns that string repeated three times
  it("should triple a string", function() {
    assert.equal('aaa', fn.tripleString('a'));
    assert.equal('100100100', fn.tripleString('100'));
    assert.equal('', fn.tripleString(''));
  });

  // define a function named tripleAnything that takes any argument,
  //   and returns a string with that argument repeated three times
  it("should triple anything", function() {
    assert.equal('xxx', fn.tripleAnything('x'));
    assert.equal('100110011001', fn.tripleAnything(1001));
    assert.equal('', fn.tripleAnything([]));
    assert.equal(key.threeArr, fn.tripleAnything([1,2,3]))
    assert.equal(key.threeObj, fn.tripleAnything({foo:17}));
  });

  // define a function named split that takes a string, and returns
  //   an array with each letter of the string as a separate element
  it("should split a string into an array of its letters", function() {
    assert.deepEqual(['x'], fn.split('x'));
    assert.deepEqual(['a','b','c','c','b','a'], fn.split('abccba'));
    assert.deepEqual([], fn.split(''));
  });

  // define a function named xnum that takes a positive integer, and returns a
  //  string composed of that number of 'x's
  it("should return a string of 'x's", function() {
    assert.equal('', fn.xnum(0));
    assert.equal(key.xnum, fn.xnum(8));
    assert.equal('x', fn.xnum(1));
  });

  // define a function named xarr that takes a positive integer, and returns
  //   an array containing that number of empty arrays
  it("should return an array of x empty arrays", function() {
    assert.deepEqual(key.emptyArray, fn.xarr(0));
    assert.deepEqual(key.arr1, fn.xarr(1));
    assert.deepEqual(key.arr8, fn.xarr(8));
  });

});



  // it("", function() {
  //   assert.deepEqual();
  // });






  // define a function named funcFunc that takes a function with one argument as its
  //   first argument, and a second argument, and returns the result of calling the
  //   function with the second argument

function getKey() {
  var i;var tenk = [];var azobj = {};
  for (i=1;i<=10000;i++) {tenk.push(i)}
  for (i=0;i<26;i++) {azobj[String.fromCharCode(i+97)]=i+1}
  return {
    emptyObject:{},emptyArray:[],emptyString:'',fiveArr:[{},{},{},{},{}],
    hello:'Hello, javascript!',fnord:23,skiddoo:"23 Skiddoo",
    oddArray:[1,3,5,7,9],fibArray:[1,1,2,3,5,8,13],tenThousand:tenk,
    simpleObject:{foo:'bar'},oddEvenObject:{1:2,3:4,5:6,7:8},alphaObject:azobj,
    threeObj:'[object Object][object Object][object Object]',threeArr:'1,2,31,2,31,2,3',
    xnum:'xxxxxxxx',arr1:[[]],arr8:[[],[],[],[],[],[],[],[]]
  }
}

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

  // define a function named 'multfour' that takes four arguments,
  //   and multiplies them all together
  it("should multiply four numbers", function() {
    assert.equal(1, fn.multfour(1,1,1,1));
    assert.equal(0, fn.multfour(123,0,242,-123));
    assert.equal(24, fn.multfour(1,2,3,4));
    assert.equal(16, fn.multfour(-2,-2,-2,-2));
    assert.equal(-4425343200, fn.multfour(123,456,789,-100));
    assert.equal(0.0625, fn.multfour(.5,.5,.5,.5));
  });

  // define a function named 'tripleString' that takes a string as an argument,
  //   and returns that string repeated three times
  it("should triple a string", function() {
    assert.equal('aaa', fn.tripleString('a'));
    assert.equal('100100100', fn.tripleString('100'));
    assert.equal('', fn.tripleString(''));
  });

  // define a function named 'tripleAnything' that takes any argument,
  //   and returns a string with that argument repeated three times
  it("should triple anything", function() {
    assert.equal('xxx', fn.tripleAnything('x'));
    assert.equal('100110011001', fn.tripleAnything(1001));
    assert.equal('', fn.tripleAnything([]));
    assert.equal(key.threeArr, fn.tripleAnything([1,2,3]))
    assert.equal(key.threeObj, fn.tripleAnything({foo:17}));
  });

  // define a function named 'isEven' that takes a string, and returns
  //  true if it has an even number of letters, false if it doesn't
  it("should return true if a string has an even number of letters", function() {
    assert.isTrue(fn.isEven('abcdef'));
    assert.isFalse(fn.isEven('xxx'));
    assert.isTrue(fn.isEven(''));
    assert.isTrue(fn.isEven('this has an even number of letters'));
  });

  // define a function named 'ander' that takes two arguments, and returns
  //  true if both are true, false otherwise
  it("should perform a logical and on two arguments", function() {
    assert.isTrue(fn.ander(true,true));
    assert.isFalse(fn.ander(false,true));
    assert.isFalse(fn.ander(true,false));
    assert.isFalse(fn.ander(false,false));
    assert.isTrue(fn.ander(1===1,'abc'==='abc'));
  });

  // define a function named 'split' that takes a string, and returns
  //   an array with each letter of the string as a separate element
  it("should split a string into an array of its letters", function() {
    assert.deepEqual(['x'], fn.split('x'));
    assert.deepEqual(['a','b','c','c','b','a'], fn.split('abccba'));
    assert.deepEqual([], fn.split(''));
  });

  // define a function named 'xnum' that takes a positive integer, and returns a
  //  string composed of that number of 'x's
  it("should return a string of 'x's", function() {
    assert.equal('', fn.xnum(0));
    assert.equal(key.xnum, fn.xnum(8));
    assert.equal('x', fn.xnum(1));
  });

  // define a function named 'oneArr' that takes an argument, and returns
  //   an array whose only element is that argument
  it("should put the thing into an array", function() {
    assert.deepEqual([''], fn.oneArr(''));
    assert.deepEqual([512], fn.oneArr(512));
    assert.deepEqual(['Foon'], fn.oneArr('Foon'));
    assert.deepEqual([undefined], fn.oneArr((function(){})()));
    assert.deepEqual([[[]]], fn.oneArr([[]]));
    assert.deepEqual([{a:1,c:3}], fn.oneArr({a:1,c:3}));
  });

  // define a function named 'xarr' that takes a positive integer, and returns
  //   an array containing that number of empty arrays
  it("should return an array of x empty arrays", function() {
    assert.deepEqual(key.emptyArray, fn.xarr(0));
    assert.deepEqual(key.arr1, fn.xarr(1));
    assert.deepEqual(key.arr8, fn.xarr(8));
  });

  // define a function named 'foofoo' that takes a string, and returns the
  //   string with 'foo' added before and after the string
  it("should put 'foo' before and after a string", function() {
    assert.equal(key.foofoo1, fn.foofoo(''));
    assert.equal(key.foofoo2, fn.foofoo('monkey'));
    assert.equal(key.foofoo3, fn.foofoo('1234567890'))
  });

  // define a function named 'insertx' that takes a string, and inserts an 'x'
  //   between each character of the string
  it("should but an 'x' between each character", function() {
    assert.equal(key.emptyString, fn.insertx(''));
    assert.equal(key.x1, fn.insertx('foobar'));
    assert.equal(key.x2, fn.insertx('I have 3 toes.'));
  });

  // define a function named 'doubleArr' that takes an array of numbers, and
  //   returns an array of numbers where each one has been doubled
  it("should double all the numbers in an array", function() {
    assert.deepEqual(key.emptyArray, fn.doubleArr([]));
    assert.deepEqual(key.darr1, fn.doubleArr([2,4,6,8,10]));
    assert.deepEqual(key.darr2, fn.doubleArr([-3,.5,17,0,-0.125]));
  });

  // define a function named 'sumArr' that takes an array of numbers, and
  //   returns the sum of all the numbers in the array
  it("should sum all the numbers in an array", function() {
    assert.equal(0, fn.sumArr([]));
    assert.equal(8, fn.sumArr([1,1,1,1,1,1,1,1]));
    assert.equal(0, fn.sumArr([-1,2,-3,2,-5,5]));
    assert.equal(15, fn.sumArr([1,2,3,4,5]))
    assert.equal(key.tenksum, fn.sumArr(key.tenThousand));
  });

  // define a function named 'arrObj' that takes an array of integers, and
  //  returns an object whose keys are the integers, and each value is an
  //  array containing that number of empty strings
  it("should return an object with integer keys and empty array values", function() {
    assert.deepEqual(key.emptyObject, fn.arrObj([]));
    assert.deepEqual(key.ao1, fn.arrObj([2,3,4,5]));
    assert.deepEqual(key.ao2, fn.arrObj([1,1,1,6,1,6]));
  });

  // define a function named 'reverse' that takes a string and returns that
  //  string in reverse order
  it("should reverse a string", function() {
    assert.equal(key.emptyString, fn.reverse(''));
    assert.equal(key.rev1, fn.reverse('abcde'));
    assert.equal(key.rev2, fn.reverse('I have a lovely bunch of coconuts?'));
  });

  // define a function named 'powersOfTwo' that takes an integer x and returns
  //   an array containing the first x powers of two, starting with 2^1
  it('should return an array of powers of two', function() {
    assert.deepEqual(key.emptyArray, fn.powersOfTwo(0));
    assert.deepEqual(key.pow1, fn.powersOfTwo(1));
    assert.deepEqual(key.pow2, fn.powersOfTwo(10));
    assert.deepEqual(key.pow3, fn.powersOfTwo(1000));
  });

  // define a function named 'wordLengths' that takes a string and returns
  //   an array containing the lengths of each word in the string. (assume that
  //   the words in the string are letters only, separated by a single space)
  it('should return an array with word lengths', function() {
    assert.deepEqual(key.emptyArray, fn.wordLengths(''));
    assert.deepEqual(key.wl1, fn.wordLengths('The Empire never ended'));
    assert.deepEqual(key.wl2, fn.wordLengths('Crunchy peanut butter is the worst'));
    assert.deepEqual(key.wl3, fn.wordLengths('pneumonoultramicroscopicsilicovolcanoconiosis'));
  });
});

describe('Higher Functions', function() {
  // define a function named 'doubleFunc' that takes a function as an argument,
  //  calls it twice, and returns the results added together
  it('should add together the result of a function called twice', function() {
    assert.equal(100,fn.doubleFunc(function(){return 50}));
    assert.equal('pizzapizza',fn.doubleFunc(function(){return 'pizza'}));
    assert.isNaN(fn.doubleFunc(function(){}));
  });

  // define a function named 'addfuncs' that takes two functions as arguments,
  //  and adds together the outputs of those functions
  it('should add together the results of two functions', function() {
    assert.equal(500,fn.addfuncs(function(){return 1},function(){return 499}));
    assert.equal('foobarbaz',fn.addfuncs(function(){return 'fooba'},function(){return 'rbaz'}));
  });

  // define a function named 'nope' that takes a function as an argument,
  //  returning true if the function returns false, and vice versa
  it('should invert the return value of the function', function() {
    assert.isTrue(fn.nope(function() {return false}));
    assert.isFalse(fn.nope(function() {return true}));
  });

  // define a function named 'callFunc' that takes two arguments; the first is
  //   a function with one argument, and the second is anything. 'callFunc' should
  //   return the result of calling the function argument with the second argument
  it('should call a function with a provided argument', function() {
    assert.equal(10, fn.callFunc(function(x){return x*5}, 2));
    assert.equal('abcd', fn.callFunc(function(a){return a.join('')}, ['a','b','c','d']));
    assert.equal(8, fn.callFunc(function(s){return s.length}, 'amethyst'));
  });

  // define a function named 'getHello' that returns a function that, when
  //  called, returns the string "hello"
  it('should produce a function that returns "hello"', function() {
    assert.isFunction(fn.getHello());
    assert.equal(key.hi, (fn.getHello())());
  });

  // define a function named 'getDoubler' that returns a function that,
  //  when called with a number, will return that number x 2
  it('should prouce a doubling function', function() {
    assert.isFunction(fn.getDoubler());
    assert.equal(100, (fn.getDoubler())(50));
    assert.equal(-1, (fn.getDoubler())(-0.5));
    assert.equal(0, (fn.getDoubler())(0));
  });

});










// helper functions
function getKey() {
  var i;var tenk = [];var azobj = {};var powk=[];for(i=1;i<=10000;i++){tenk.push(i)}
  for(i=1;i<=1000;i++){powk.push(Math.pow(2,i))}for(i=0;i<26;i++){azobj[String.fromCharCode(i+97)]=i+1}
  return {
    emptyObject:{},emptyArray:[],emptyString:'',fiveArr:[{},{},{},{},{}],
    hello:'Hello, javascript!',fnord:23,skiddoo:"23 Skiddoo",
    oddArray:[1,3,5,7,9],fibArray:[1,1,2,3,5,8,13],tenThousand:tenk,
    simpleObject:{foo:'bar'},oddEvenObject:{1:2,3:4,5:6,7:8},alphaObject:azobj,
    threeObj:'[object Object][object Object][object Object]',threeArr:'1,2,31,2,31,2,3',
    xnum:'xxxxxxxx',arr1:[[]],arr8:[[],[],[],[],[],[],[],[]],foofoo1:'foofoo',
    foofoo2:'foomonkeyfoo',foofoo3:'foo1234567890foo',x1:'fxoxoxbxaxr',x2:'Ix xhxaxvxex x3x xtxoxexsx.',
    darr1:[4,8,12,16,20],darr2:[-6,1,34,0,-.25],tenksum:50005000,
    ao1:{2:['',''],3:['','',''],4:['','','',''],5:['','','','','',]},ao2:{1:[''],6:['','','','','','']},
    rev1:'edcba',rev2:'?stunococ fo hcnub ylevol a evah I',pow1:[2],pow2:[2,4,8,16,32,64,128,256,512,1024],pow3:powk,
    wl1:[3,6,5,5],wl2:[7,6,6,2,3,5],wl3:[45],hi:'hello'
  }
}

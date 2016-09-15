var fn = {};

// define functions on the fn object like this:
// fn.functionName = function() { ... }
// test with 'npm test'
fn.nothing = function(){}
fn.true = function(){return false}
fn.emptyString = function(){return ''}
fn.hello = function() {return "Hello, javascript!"}
fn.fnord = function(){return 23}
fn.skiddoo = function(){return "23 Skiddoo"}
fn.emptyArray = function(){return []}
fn.oddArray = function(){return [1, 3, 5, 7, 9]}
fn.fibArray = function(){return [1, 1, 2, 3, 5, 8, 13]}
fn.tenThousand = function(){var a=[];for (var i=1;i<=10000;i++) {a.push(i)} return a}
fn.emptyObject = function(){return {}}
fn.simpleObject = function(){return {foo:"bar"}}
fn.oddEvenObject = function(){return {1:2,3:4,5:6,7:8}}
fn.alphaObject = function(){var o={}; for (var i=0; i<26; i++) { o[String.fromCharCode(i+97)] = i+1 } return o }
fn.fiveArr = function(){return [{},{},{},{},{}]}
fn.itself = function(x){return x}
fn.plusOne = function(i){return i+1}
fn.double = function(i){return i*2}
fn.sub = function(a,b){return a-b}
fn.multfour = function(a,b,c,d){return a*b*c*d}
fn.tripleString = function(s){return s+s+s}
fn.tripleAnything = function(s){a = String(s);return a+a+a}
fn.isEven = function(s){return s.length%2 === 0}
fn.ander = function(a,b){return a&&b}
fn.split = function(s){return s.split('')}
fn.xnum = function(n){return Array(n+1).join('x')}
fn.oneArr = function(a){return [a]}
fn.xarr = function(x){var a=[];for (var i=0; i<x; i++) {a.push([])}return a}
fn.foofoo = function(s){return 'foo'+s+'foo'}
fn.insertx = function(s){return s.split('').join('x')}
fn.doubleArr = function(a){return a.map(function(x){return 2*x})}
fn.sumArr = function(a){return a.reduce(function(a,b){return a+b},0)}
fn.arrObj = function(a){return a.reduce(function(a,b){var arr=[];for (var i=0;i<b;i++) {arr.push('')}a[b] = arr;return a  },{})}
fn.reverse = function(s){return s.split('').reverse().join('')}
fn.powersOfTwo = function(a){var arr=[]; for (var i=0;i<a;i++){ arr.push(Math.pow(2,i+1)) }return arr}
fn.wordLengths = function(s){return (s==='')?[]:s.split(' ').map(function(x){return x.length})}
fn.doubleFunc = function(f){return f()+f()}
fn.addfuncs = function(a,b){return a()+b()}
fn.nope = function(f){return !f()}
fn.callFunc = function(f,a){return f(a)}
fn.getHello = function(){return function(){return "hello"}}
fn.getDoubler = function(){return function(x){return x*2}}

module.exports = fn;

var fn = {};

// define functions on the fn object like this:
// fn.functionName = function() { ... }
// test with 'npm test'

fn.oneArr=function(a){return [a]}
fn.ander=function(a,b){return a&& b}
fn.addfuncs=function(f1,f2){return f1()+f2()}
fn.getHello = function(){return function() {return 'hello'}}
fn.getDoubler = function() {return function(x){return x*2}}
fn.nope = function(f){return !f()}
fn.nothing = function(){}
fn.hello = function(){return 'Hello, javascript!';}
fn.fnord = function(){return 23;}
fn.true = function(){return false;}
fn.emptyString = function(){return '';}
fn.emptyArray = function(){return [];}
fn.fibArray = function(){return [1, 1, 2, 3, 5, 8, 13];}
fn.oddArray = function(){return [1, 3, 5, 7, 9];}
fn.skiddoo = function(){return '23 Skiddoo'}
fn.emptyObject = function(){return {};}
fn.simpleObject = function(){return {foo: 'bar'}}
fn.oddEvenObject = function(){return {1:2,3:4,5:6,7:8}}
fn.tenThousand = function(){var tenk=[];for (i=1;i<=10000;i++){tenk.push(i)}return tenk;}
fn.fiveArr = function(){return [{},{},{},{},{}]}
fn.alphaObject = function(){var azobj={};for (i=0;i<26;i++){azobj[String.fromCharCode(i+97)]=i+1}return azobj;}
fn.itself = function(x){return x}
fn.plusOne = function(x){return x+1}
fn.double = function(x){return x*2}
fn.sub = function(x,y){return x-y}
fn.multfour = function(a,b,c,d){return a*b*c*d}
fn.tripleString = function(s){return s+s+s}
fn.tripleAnything = function(x){var s=String(x);return s+s+s}
fn.split = function(s){return s.split('')}
fn.xnum = function(x){return Array(x+1).join('x')}
fn.xarr = function(x){var a=[];for(i=0;i<x;i++){a.push([])}return a}
fn.isEven=function(s){return s.length%2===0}
fn.foofoo = function(s){return 'foo'+s+'foo'}
fn.insertx = function(s){return s.split('').join('x')}
fn.doubleArr = function(a){return a.map(function(x){return x*2})};
fn.sumArr = function(a){return a.reduce(function(a,b){return a+b},0)}
fn.arrObj = function(a){return a.reduce(function(a,b){var aa=[];
for(var i=0;i<b;i++){aa.push('')} a[b]=aa; return a},{})}
fn.reverse = function(s){return s.split('').reverse().join('')}
fn.powersOfTwo=function(x){var a=[];for(var i=1;i<=x;i++){a.push(Math.pow(2,i))}return a}
fn.wordLengths=function(s){return (s.length==0)?[]:s.split(' ').reduce(function(a,b){a.push(b.length);return a},[])}
fn.doubleFunc=function(f){return f()+f()}
fn.callFunc=function(f,a){return f(a)}


module.exports = fn;

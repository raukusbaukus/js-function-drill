var fn = {};

// define functions on the fn object like this:
// fn.functionName = function() { ... }
// test with 'npm test'
fn.nothing = function() {
  return undefined;
}

fn.skiddoo = function () {
  return '23 Skiddoo';
}

fn.emptyArray = function() {
  return [];
}

fn.oddArray = function () {
  return [1,3,5,7,9];
}

fn.fibArray = function() {
  return [1,1,2,3,5,8,13];
}

fn.tenThousand = function() {
  var arr = [];
  for (i=0;i<10000;i++) {
    arr.push(i+1);
  }
  return arr;
}


module.exports = fn;

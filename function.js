var fn = {};

// define functions on the fn object like this:
// fn.functionName = function() { ... }

fn.nothing = function() {
}

fn.hello = function() {
  return 'Hello, javascript!';
}

fn.fnord = function() {
  return 23;
}

fn.true = function() {
  return false;
}

fn.emptyString = function() {
  return '';
}

fn.emptyArray = function() {
  return [];
}

fn.fibArray = function() {
  return [1, 1, 2, 3, 5, 8, 13];
}

fn.oddArray = function() {
  return [1, 3, 5, 7, 9];
}

fn.skiddoo = function() {
  return '23 Skiddoo'
}

module.exports = fn;

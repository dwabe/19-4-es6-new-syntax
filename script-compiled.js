'use strict';

// Exercise 1
var hello = 'Hello';
var world = 'World';

console.log(hello + ' ' + world);

// Exercise 2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(5));

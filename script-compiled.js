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

// Exercise 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (acc, cur) {
    return acc + cur;
  }) / args.length;
};

console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

// Exercise 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// Exercise 5
var tab = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = tab[2],
    lastname = tab[4];


console.log(firstname + ' ' + lastname);

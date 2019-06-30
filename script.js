// Exercise 1
let hello = 'Hello';
let world = 'World';

console.log(`${hello} ${world}`);

// Exercise 2
const multiply = (a, b = 1) => a * b;

console.log(multiply(5));

// Exercise 3
const average = (...args) => (args.reduce((acc, cur) => acc + cur)) / args.length;

console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

// Exercise 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// Exercise 5
const tab = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = tab;

console.log(`${firstname} ${lastname}`);
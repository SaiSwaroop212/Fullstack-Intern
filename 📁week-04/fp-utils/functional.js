// Functional Style
// Uses filter() and map()

const numbers = [1,2,3,4,5,6];

const result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * number);

console.log("Functional Result:");

console.log(result);
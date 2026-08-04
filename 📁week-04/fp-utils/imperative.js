// Imperative Style
// Uses loops and mutation.

const numbers = [1, 2, 3, 4, 5, 6];

let result = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {

        result.push(numbers[i] * numbers[i]);

    }

}

console.log("Imperative Result:");

console.log(result);
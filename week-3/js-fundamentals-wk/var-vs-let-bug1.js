// Bug: var is not block scoped

if (true) {
    var message = "Hello";
}

console.log(message); // Accessible outside the block

// Fix

if (true) {
    let greeting = "Hi";
    console.log(greeting);
}

// console.log(greeting); // Error: greeting is not defined
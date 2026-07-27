// Bug using var

if (true) {

    var message = "Hello";

}

console.log(message);

// Fix

if (true) {

    let greeting = "Hello";

    console.log(greeting);

}
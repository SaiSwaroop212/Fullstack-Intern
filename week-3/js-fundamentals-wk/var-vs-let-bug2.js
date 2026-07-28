// Bug: var allows redeclaration

var name = "Sai";
var name = "Swaroop";

console.log(name);

// Fix

let student = "Sai";

// let student = "Swaroop"; // Error

student = "Swaroop";

console.log(student);
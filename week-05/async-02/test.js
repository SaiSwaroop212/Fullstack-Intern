const MyPromise = require("../custom-promise/my-promise");

const {
    myAll,
    myRace,
    myAllSettled
} = require("./promise-combinators");


// Promise 1
const p1 = new MyPromise((resolve) => {

    setTimeout(() => {
        resolve("A");
    }, 1000);

});


// Promise 2
const p2 = new MyPromise((resolve) => {

    setTimeout(() => {
        resolve("B");
    }, 2000);

});


// Promise 3
const p3 = new MyPromise((resolve) => {

    setTimeout(() => {
        resolve("C");
    }, 1500);

});


// Test myAll()
myAll([p1, p2, p3])
    .then((result) => {

        console.log("ALL:", result);

    });


// Test myRace()
myRace([p1, p2, p3])
    .then((result) => {

        console.log("RACE:", result);

    });


// Test myAllSettled()
myAllSettled([p1, p2, p3])
    .then((result) => {

        console.log("ALL SETTLED:", result);

    });
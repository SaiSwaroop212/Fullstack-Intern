// Promise starts in the pending state

const successPromise = new Promise((resolve, reject) => {

    console.log("Promise is pending...");

    setTimeout(() => {
        resolve("Promise fulfilled!");
    }, 2000);

});

successPromise.then((result) => {
    console.log(result);
});


// Rejected Promise

const failedPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Promise rejected!");
    }, 3000);

});

failedPromise.catch((error) => {
    console.log(error);
});
const MyPromise = require("../custom-promise/my-promise");


// Promise.all()
function myAll(promises) {

    return new MyPromise((resolve, reject) => {

        const results = [];
        let count = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {

            promise.then(

                (value) => {

                    results[index] = value;
                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }

                },

                (error) => {

                    reject(error);

                }
            );
        });
    });
}


// Promise.race()
function myRace(promises) {

    return new MyPromise((resolve, reject) => {

        promises.forEach((promise) => {

            promise.then(

                (value) => {
                    resolve(value);
                },

                (error) => {
                    reject(error);
                }
            );
        });
    });
}


// Promise.allSettled()
function myAllSettled(promises) {

    return new MyPromise((resolve) => {

        const results = [];
        let count = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {

            promise.then(

                (value) => {

                    results[index] = {
                        status: "fulfilled",
                        value: value
                    };

                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                },

                (error) => {

                    results[index] = {
                        status: "rejected",
                        reason: error
                    };

                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                }
            );
        });
    });
}


module.exports = {
    myAll,
    myRace,
    myAllSettled
};
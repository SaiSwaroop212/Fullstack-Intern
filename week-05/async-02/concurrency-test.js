const concurrencyLimiter = require("./concurrency-limiter");

function task(id, time) {

    return () => {

        console.log("Task", id, "started");

        return new Promise((resolve) => {

            setTimeout(() => {

                console.log("Task", id, "finished");

                resolve("Task " + id + " completed");

            }, time);

        });
    };
}


const tasks = [
    task(1, 2000),
    task(2, 1000),
    task(3, 1500),
    task(4, 1000),
    task(5, 500)
];


concurrencyLimiter(tasks, 3)
    .then((results) => {

        console.log("All completed");
        console.log(results);

    });
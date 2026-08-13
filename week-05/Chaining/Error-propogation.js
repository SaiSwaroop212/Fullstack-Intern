console.log("Start");

Promise.resolve(10)

    .then((value) => {

        console.log("Step 1:", value);

        return value * 2;

    })

    .then((value) => {

        console.log("Step 2:", value);

        throw new Error("Something went wrong");

    })

    .then((value) => {

        console.log("Step 3:", value);

    })

    .catch((error) => {

        console.log("Caught error:", error.message);

    })

    .finally(() => {

        console.log("Chain completed");

    });

console.log("End");
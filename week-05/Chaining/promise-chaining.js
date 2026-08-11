console.log("Start");

Promise.resolve(10)

    .then((value) => {

        console.log("Step 1:", value);

        return value * 2;

    })

    .then((value) => {

        console.log("Step 2:", value);

        return value + 5;

    })

    .then((value) => {

        console.log("Step 3:", value);

        return value * 2;

    })

    .then((value) => {

        console.log("Final result:", value);

    });

console.log("End");
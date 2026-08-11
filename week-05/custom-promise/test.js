const assert = require("assert");
const MyPromise = require("./my-promise");

async function compare(name, customPromise, nativePromise) {
    try {
        const customResult = await customPromise;
        const nativeResult = await nativePromise;

        assert.deepStrictEqual(customResult, nativeResult);

        console.log(`✅ ${name}`);
    } catch (error) {
        console.log(`❌ ${name}`);
        console.error(error);
    }
}


async function runTests() {

    // 1. Basic resolve
    await compare(
        "Basic resolve",

        MyPromise.resolve("Hello"),

        Promise.resolve("Hello")
    );


    // 2. Basic reject
    await compare(
        "Basic rejection",

        MyPromise
            .reject("Something went wrong")
            .catch(error => error),

        Promise
            .reject("Something went wrong")
            .catch(error => error)
    );


    // 3. then chaining
    await compare(
        "Promise chaining",

        MyPromise.resolve(10)
            .then(value => value * 2)
            .then(value => value + 5),

        Promise.resolve(10)
            .then(value => value * 2)
            .then(value => value + 5)
    );


    // 4. Error propagation
    await compare(
        "Error propagation",

        MyPromise.resolve(10)
            .then(() => {
                throw new Error("Something went wrong");
            })
            .catch(error => error.message),

        Promise.resolve(10)
            .then(() => {
                throw new Error("Something went wrong");
            })
            .catch(error => error.message)
    );


    // 5. finally
    await compare(
        "finally",

        MyPromise.resolve("Success")
            .finally(() => {}),

        Promise.resolve("Success")
            .finally(() => {})
    );


    // 6. Returned Promise
    await compare(
        "Returned Promise",

        MyPromise.resolve(10)
            .then(value => {
                return MyPromise.resolve(value * 2);
            }),

        Promise.resolve(10)
            .then(value => {
                return Promise.resolve(value * 2);
            })
    );


    // 7. Thenable resolution
    await compare(
        "Thenable resolution",

        MyPromise.resolve({
            then(resolve) {
                resolve("Thenable value");
            }
        }),

        Promise.resolve({
            then(resolve) {
                resolve("Thenable value");
            }
        })
    );


    // 8. Async .then()
    const customOrder = [];

    const customPromise = MyPromise
        .resolve("Done")
        .then(() => {
            customOrder.push("then");
        });

    customOrder.push("sync");

    await customPromise;

    assert.deepStrictEqual(
        customOrder,
        ["sync", "then"]
    );

    console.log("✅ Async .then()");


    console.log("\nAll tests completed successfully.");
}


runTests();
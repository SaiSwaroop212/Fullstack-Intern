function runExample3() {

    console.clear();

    console.log("1");

    Promise.resolve().then(() => {
        console.log("2");
    });

    setTimeout(() => {
        console.log("3");
    }, 0);

    console.log("4");
}
// Bug: var is function scoped

function demo() {

    if (true) {
        var city = "Bengaluru";
    }

    console.log(city); // Accessible here
}

demo();

// Fix

function example() {

    if (true) {
        let state = "Karnataka";
        console.log(state);
    }

    // console.log(state); // Error: state is not defined
}

example();
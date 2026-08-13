function checkUserLogin(isLoggedIn) {

    return new Promise((resolve, reject) => {

        if (isLoggedIn) {

            resolve("Login successful");

        } else {

            reject("Login failed");

        }

    });

}


// Successful case

checkUserLogin(true)

    .then((message) => {
        console.log(message);
    })

    .catch((error) => {
        console.log(error);
    });


// Failed case

checkUserLogin(false)

    .then((message) => {
        console.log(message);
    })

    .catch((error) => {
        console.log(error);
    });
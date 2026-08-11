const promise = new Promise((resolve, reject) => {

    const success = true;

    setTimeout(() => {

        if (success) {
            resolve("Data received successfully");
        } else {
            reject("Failed to receive data");
        }

    }, 1000);

});


promise

    .then((data) => {

        console.log("SUCCESS:", data);

    })

    .catch((error) => {

        console.log("ERROR:", error);

    });
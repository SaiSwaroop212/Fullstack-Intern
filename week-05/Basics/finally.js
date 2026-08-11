function fetchData(success) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (success) {
                resolve("Data loaded");
            } else {
                reject("Something went wrong");
            }

        }, 1000);

    });

}


fetchData(true)

    .then((data) => {

        console.log("SUCCESS:", data);

    })

    .catch((error) => {

        console.log("ERROR:", error);

    })

    .finally(() => {

        console.log("Operation finished");

    });
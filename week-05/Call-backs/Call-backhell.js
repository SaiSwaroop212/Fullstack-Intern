console.log("Start");

function loginUser(username, callback) {

    setTimeout(() => {

        console.log("User logged in:", username);

        callback({
            id: 101,
            username: username
        });

    }, 1000);
}


function getUserProfile(user, callback) {

    setTimeout(() => {

        console.log("Profile received");

        callback({
            userId: user.id,
            name: "Sai",
            age: 22
        });

    }, 1000);
}


function getUserPosts(profile, callback) {

    setTimeout(() => {

        console.log("Posts received");

        callback([
            "JavaScript",
            "Node.js",
            "Promises"
        ]);

    }, 1000);
}


function getComments(posts, callback) {

    setTimeout(() => {

        console.log("Comments received");

        callback([
            "Great post!",
            "Very useful!",
            "Nice explanation!"
        ]);

    }, 1000);
}


// Callback Hell

loginUser("Sai", (user) => {

    getUserProfile(user, (profile) => {

        getUserPosts(profile, (posts) => {

            getComments(posts, (comments) => {

                console.log("Final comments:", comments);

            });

        });

    });

});

console.log("End");
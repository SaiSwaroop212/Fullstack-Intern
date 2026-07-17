console.log("Using var");

for (var i = 1; i <= 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 100);

}

console.log("Using let");

for (let j = 1; j <= 3; j++) {

    setTimeout(() => {

        console.log(j);

    }, 100);

}
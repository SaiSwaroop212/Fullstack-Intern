// Executes functions from Left → Right

function pipe(...functions) {

    return function (value) {

        return functions.reduce((accumulator, currentFunction) => {

            return currentFunction(accumulator);

        }, value);

    };

}

module.exports = pipe;
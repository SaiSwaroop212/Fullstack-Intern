// Executes functions from Right → Left

function compose(...functions) {

    return function (value) {

        return functions.reduceRight((accumulator, currentFunction) => {

            return currentFunction(accumulator);

        }, value);

    };

}

module.exports = compose;
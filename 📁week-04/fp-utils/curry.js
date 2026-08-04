// Converts a function with multiple arguments
// into a sequence of functions with one argument.

function curry(fn) {
    return function curried(...args) {

        if (args.length >= fn.length) {
            return fn(...args);
        }

        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

module.exports = curry;
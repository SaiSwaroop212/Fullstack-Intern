// Custom implementation of call()

Function.prototype.myCall = function (context, ...args) {
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
};

function greet(city) {
    console.log(`Hello, I am ${this.name} from ${city}`);
}

const person = { name: "Sai" };

greet.myCall(person, "Bengaluru");
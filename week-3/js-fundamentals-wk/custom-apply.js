// Custom implementation of apply()

Function.prototype.myApply = function (context, args = []) {
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
};

function greet(city) {
    console.log(`Hello, I am ${this.name} from ${city}`);
}

const person = { name: "Sai" };

greet.myApply(person, ["Hyderabad"]);
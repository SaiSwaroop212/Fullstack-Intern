Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis;

    context.fn = this;

    const result = context.fn(...args);

    delete context.fn;

    return result;
};

function greet(city, country) {
    console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

const person = {
    name: "Sai"
};

greet.myCall(person, "Hyderabad", "India");
Function.prototype.myBind = function (context, ...args) {
    const fn = this;

    return function (...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

function greet(city) {
    console.log(`Hello, I am ${this.name} from ${city}`);
}

const person = {
    name: "Sai"
};

const newFunc = greet.myBind(person);

newFunc("Chennai");
Function.prototype.myBind = function (context, ...args) {

    const fn = this;

    return function (...newArgs) {

        return fn.apply(context, [...args, ...newArgs]);

    };

};

function greet(city) {
    console.log(`Hello ${this.name} from ${city}`);
}

const person = {
    name: "Sai"
};

const boundFunction = greet.myBind(person);

boundFunction("Hyderabad");
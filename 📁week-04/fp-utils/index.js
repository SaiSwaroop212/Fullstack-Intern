const curry = require("./curry");
const compose = require("./compose");
const pipe = require("./pipe");
const deepFreeze = require("./deepFreeze");

console.log("========= CURRY =========");

function add(a,b,c){

    return a+b+c;

}

const curriedAdd = curry(add);

console.log(curriedAdd(10)(20)(30));



console.log("========= COMPOSE =========");

const double = number => number * 2;

const square = number => number * number;

console.log(compose(square,double)(5));



console.log("========= PIPE =========");

console.log(pipe(double,square)(5));



console.log("========= DEEP FREEZE =========");

const user = {

    name:"Sai",

    address:{

        city:"Bangalore"

    }

};

deepFreeze(user);

console.log(user);
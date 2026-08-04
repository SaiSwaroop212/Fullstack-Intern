const curry = require("../curry");

test("Currying", () => {

    function add(a,b,c){

        return a+b+c;

    }

    const curried = curry(add);

    expect(curried(10)(20)(30)).toBe(60);

});
const compose = require("../compose");

test("Compose", () => {

    const double = x => x * 2;

    const square = x => x * x;

    expect(compose(square,double)(5)).toBe(100);

});
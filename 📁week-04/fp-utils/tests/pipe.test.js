const pipe = require("../pipe");

test("Pipe", () => {

    const double = x => x * 2;

    const square = x => x * x;

    expect(pipe(double,square)(5)).toBe(100);

});
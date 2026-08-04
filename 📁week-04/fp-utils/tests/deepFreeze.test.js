const deepFreeze = require("../deepFreeze");

test("Deep Freeze", () => {

    const object = {

        name:"Sai",

        address:{

            city:"Bangalore"

        }

    };

    deepFreeze(object);

    expect(Object.isFrozen(object)).toBe(true);

    expect(Object.isFrozen(object.address)).toBe(true);

});
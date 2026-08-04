// Abstraction using ES6 Classes

class Car {

    startEngine() {
        console.log("Engine Started...");
    }

    drive() {
        this.startEngine();
        console.log("Car is moving.");
    }
}

const car = new Car();

car.drive();
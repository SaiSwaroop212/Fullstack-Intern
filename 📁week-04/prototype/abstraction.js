function Car(brand) {
    this.brand = brand;
}

// Internal Method
Car.prototype.startEngine = function () {
    console.log("Engine Started...");
};

// Public Method
Car.prototype.drive = function () {
    this.startEngine();
    console.log(`${this.brand} is now moving.`);
};

const car = new Car("Toyota");

car.drive();
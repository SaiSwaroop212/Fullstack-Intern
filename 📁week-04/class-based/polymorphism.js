// Polymorphism using ES6 Classes

class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

const shapes = [
    new Circle(5),
    new Rectangle(4, 6)
];

shapes.forEach(shape => {
    console.log("Area:", shape.area().toFixed(2));
});
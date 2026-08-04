// Parent Constructor
function Shape() {}

// Common Method
Shape.prototype.area = function () {
    return 0;
};

// Circle Constructor
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * this.radius * this.radius;
};

// Rectangle Constructor
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
    return this.length * this.width;
};

const shapes = [
    new Circle(5),
    new Rectangle(4, 6)
];

shapes.forEach(shape => {
    console.log("Area:", shape.area().toFixed(2));
});
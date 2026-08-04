// Parent Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.display = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
};

// Child Constructor
function Student(name, age, course) {
    Person.call(this, name, age); // Call Parent Constructor
    this.course = course;
}

// Inherit Prototype
Student.prototype = Object.create(Person.prototype);

// Reset Constructor
Student.prototype.constructor = Student;

// Child Method
Student.prototype.showCourse = function () {
    console.log(`Course: ${this.course}`);
};

const student = new Student("Sai", 21, "Computer Science");

student.display();
student.showCourse();
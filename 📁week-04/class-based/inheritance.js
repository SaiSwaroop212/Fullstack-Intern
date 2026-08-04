// Inheritance using ES6 Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    showCourse() {
        console.log(`Course: ${this.course}`);
    }
}

const student = new Student("Sai", 21, "Computer Science");

student.display();
student.showCourse();
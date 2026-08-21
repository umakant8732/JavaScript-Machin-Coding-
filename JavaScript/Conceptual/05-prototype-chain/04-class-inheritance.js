/**
 * Step 4: Class Inheritance (ES6 Syntactic Sugar)
 * 
 * Task:
 * 1. Create a 'Person' class with a constructor and 'sayHello' method.
 * 2. Create a 'Student' class that inherits from 'Person' using 'extends'.
 * 3. Use 'super()' to call the parent constructor and add a 'study' method.
 */

// 1. Parent Class
class Person {
    // constructor fn to set methods/properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Methods written directly in the class go automatically to Person.prototype
    sayHello() {
        console.log("Hii, I am " + this.name + ", " + this.age + " years old.");
    }
}

// 2. Child Class inheriting from Parent using 'extends'
// 'extends' automatically sets up the prototype chain: Student.prototype = Object.create(Person.prototype)
class Student extends Person {
    constructor(name, age, course) {
        // 'super' calls the parent's constructor. 
        // It acts like Person.call(this, name, age)
        // MUST be called before using 'this' in a derived class.
        super(name, age);
        this.course = course; // student's own property
    }

    // Method added directly to Student.prototype
    study() {
        console.log(this.name + " is studying " + this.course);
    }
}

// 3. Testing the inheritance
const student = new Student("Umakant", 22, "ReactJs");
student.sayHello(); // Output: Hii, I am Umakant, 22 years old.
student.study();    // Output: Umakant is studying ReactJs

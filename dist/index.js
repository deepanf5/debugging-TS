"use strict";
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Person extends Employee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let personObj = new Person('jimmy', 'anderson', 20000);
console.log(personObj.salary);
//# sourceMappingURL=index.js.map
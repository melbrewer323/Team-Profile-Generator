class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printName() {
        return this.name;
    }
    printId() {
        return this.id;
    }
    printEmail() {
        return this.email;
    }  
}
 module.exports = Employee

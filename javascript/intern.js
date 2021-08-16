const Employee = require("./all")

class Intern extends Employee {
    constructor(name, id, email, school,year){
        super(name, id, email)
        this.school = school;
        this.year = year;
        this.title = "Intern";
        
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return this.title;
    }

    getYear(){
        return this.year;
    }
}

module.exports = Intern
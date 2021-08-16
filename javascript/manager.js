const Employee = require("./all")


class Manager extends Employee {
    constructor (name, id, email, officeNumber,mobileNumber){
        super (name, id, email)
        this.officeNumber = officeNumber;
        this.mobileNumber = mobileNumber;
        this.title = "Manager"
    }

    getRole(){
        return this.title;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getMobileNumber(){
        return this.mobileNumber;
    }

}

module.exports = Manager
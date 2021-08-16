const Employee = require("./all")

class Engineer extends Employee {
    constructor(name, id, email, github, skill){
        super (name, id, email)
        this.github = github;
        this.skill = skill;
        this.title = "Engineer";
        
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.title;
    }

    getSkill(){
        return this.skill;
    }
}

module.exports = Engineer
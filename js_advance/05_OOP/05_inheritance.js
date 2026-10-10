class User{
    constructor(username){
        this.username = username;
    }

    logdMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourses() {
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("Hitesh", "hitesh@gmail.com", "123")
chai.addCourses();
chai.logdMe();
 
console.log(chai instanceof Teacher); // true

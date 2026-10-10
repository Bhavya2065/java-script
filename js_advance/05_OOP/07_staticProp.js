class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() { // A static method belongs to the class itself, not to its objects (instances)
        return `123`
    }
}

const hitesh = new User("hitesh");
// console.log(User.createId()); // works
// console.log(hitesh.createId()) // ❌ Error

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "jkfhui")
console.log(iphone.logMe());
// console.log(iphone.createId()); // ❌ Error 
// iphone is an instance (object).

// the instance is not access the createId()
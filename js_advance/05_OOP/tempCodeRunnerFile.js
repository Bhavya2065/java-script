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
console.log(User.createId());
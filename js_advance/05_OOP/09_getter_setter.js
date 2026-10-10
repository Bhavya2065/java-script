// =================================================================
// JavaScript Getters & Setters Guide (3 Ways)
// =================================================================
// 1. Why use Getters & Setters?
// - To control how properties are read or written.
// - To send back modified data (like uppercase email or masked password).
// - Note: We use an underscore (like this._password) to avoid Maximum call stack Error.

// 2. Object.defineProperty(obj, "prop", { settings })
//    - It allows you to change these settings (writable, enumerable, configurable) for a property.

// -----------------------------------------------------------------
// 1. Class-Based Approach (Modern ES6 Way)
// -----------------------------------------------------------------
class UserClass {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() { 
        return `${this._password}nddf`;
    }

    set password(value) { 
        // this.password = value.toUpperCase(); // RangeError: Maximum call stack size exceeded
        this._password = value.toUpperCase();
    }
}

const hitesh = new UserClass("hitesh@133", 'aBc');
console.log("--- 1. Class-Based Output ---");
console.log(hitesh.password); // ABCnddf

// -----------------------------------------------------------------
// 2. Constructor Function Approach (Older ES5 Way)
// -----------------------------------------------------------------
// Uses Object.defineProperty to attach getters and setters.
// Syntax: Object.defineProperty(obj, prop, descriptor)

function UserFunction(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });
}

const chai = new UserFunction("chai@chai.com", "chai");
console.log("\n--- 2. Function-Based Output ---");
console.log(chai.email); // CHAI@CHAI.COM


// -----------------------------------------------------------------
// 3. Object-Based Approach (Object.create Way)
// -----------------------------------------------------------------
// Uses a prototype object with get/set properties.
const UserObjectTemplate = {
    _email: 'h@hc.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};

const tea = Object.create(UserObjectTemplate);
console.log("\n--- 3. Object-Based Output ---");
console.log(tea); // {} (Empty because properties are inherited from the prototype)
console.log(tea.email); // H@HC.COM
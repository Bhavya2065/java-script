// two ways to declare an object:
// 1) constructor (Always made singleton Object)
// 2) literel (Not made singleton Object)

// Object: literal
const Jsuser = {
    name: "Bhavya", // Javascript compiler treat name key as string("name")
    "full Name": "Bhavya Dani",
    age: 15,
    email: "sanjivdani123@gmail.com",
    isLoggedin: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// How to access this values
// two types:
console.log(Jsuser.email); // (1)
console.log(Jsuser["email"]); // (2)
console.log(Jsuser["full Name"]); // There is no other way to print this value
console.log();

// Interview Question: Define One symbol in object and retreive it

const mySymbol = Symbol(100)

const obj = {
    name: "divyansh",
    [mySymbol]: 200
}
console.log(obj[mySymbol]);
console.log(typeof obj[mySymbol]);
console.log(obj.mySymbol); // This is totally Wrong method to retrive this data
console.log(obj);
console.log();

// How to change the object values

Jsuser.age = 20
Jsuser["full Name"] = "Bhavy Shah"
console.log(Jsuser.age);
console.log(Jsuser["full Name"]);
// This all changes are appllying in Jsuser means all values are update in real time
console.log();

// How to lock the values that can not be change by anyone

console.log(Jsuser);
// Object.freeze(Jsuser)
Jsuser.age = 22
console.log(Jsuser.age); // It's value doesn't change from 20 to 22
console.log();

// How to give greetings to object
// Note: To give greetings to object, first we comment the freeze functionality because it locks the all values

Jsuser.greetings = function () {
    console.log("Hello Js User");
}

Jsuser.greetings1 = function () {
    console.log(`Hello Js User, ${this["full Name"]}`);
}

console.log(Jsuser.greetings());
console.log(Jsuser.greetings1());
console.log();

// How to merge two objects

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// ********************** case: 1 ************************** //
const obj3 = Object.assign({}, obj1, obj2) 
// Here first element ( {} ) is target and other elements are source 
console.log(obj3);
// Note: Here  `{}` is the target so that the all object values can stored in in this curly brases

// ********************** case: 2 ************************** //
const obj4 = Object.assign(obj1, obj2)
console.log(obj4); // Here target is the obj1
console.log(obj3 === obj4);
// It gives fales because the target is changed for both cases

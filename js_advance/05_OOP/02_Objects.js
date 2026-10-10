// function myFun (a) {
//     return a*5
// }
// myFun.power = 2;

// console.log(typeof myFun);
// console.log(myFun.power);

// In js all things are Object (array, String, Function everything)

function CreateUser(usrename, score) {
    console.log(this);
    this.usrename = usrename,
    this.score = score
}

CreateUser.prototype.increment = function () {
    return this.score + 1;
}
CreateUser.prototype.printme = function () {
    return `Score is ${this.score}`;
}

const chai = new CreateUser("chai", 23);
const tea = CreateUser("tea", 13);

console.log(chai.printme());
console.log(chai.increment());
// console.log(tea.score);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/*
PROTOTYPE ACCESS NOTE:

1. .prototype access (Constructor Functions / Classes):
   - Example:
     CreateUser.prototype.myMethod = function() {}; // ✅ Works
     Object.prototype.myMethod = function() {};     // ✅ Works

2. __proto__ / Object.getPrototypeOf access (Object Instances):
   - Example:
     chai.prototype;             // ❌ Returns undefined
     chai.__proto__;             // ✅ Access instance prototype
     Object.getPrototypeOf(chai); // ✅ Recommended way to access instance prototype
*/

/*
METHOD SHADOWING / PRIORITY NOTE:
If an object and its prototype have the same method name:
- Object's OWN method has 1st Priority (runs first).
- Prototype's method has 2nd Priority (runs ONLY IF own method is missing).

Example:
  const employee = { calcTax() { console.log("10%"); } };
  const karanArjun = { calcTax() { console.log("20%"); } };
  karanArjun.__proto__ = employee;

  karanArjun.calcTax(); // Output: "20%" (Overridden by own method)
*/


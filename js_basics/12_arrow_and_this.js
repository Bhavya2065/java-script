/*
  =============================================================================
  📌 THIS KEYWORD & ARROW FUNCTIONS
  =============================================================================
  
  1. `this` Keyword Behavior:
     - Refers to current context object during invocation.
     - In Node.js global environment, standalone `this` is `{}` (empty object).
     - In Browser global environment, standalone `this` is `window`.

  2. Regular Functions vs Arrow Functions:
     - Regular Functions: Have dynamic `this` bound to caller object.
     - Arrow Functions: Do NOT have their own `this`; they inherit lexical `this` from enclosing scope.
     - Example:
         const add = (a, b) => a + b; // Implicit return (no braces needed)
         const getObj = () => ({ username: "Bhavya" }); // Returning object requires wrapping parentheses
  =============================================================================
*/

// =============================================================================
// 📌 1. 'THIS' KEYWORD BEHAVIOR IN OBJECT METHODS & GLOBAL CONTEXT
// =============================================================================

const obj = {
    username: "Bhavya",
    age: 20,
    Welcome_message: function () {
        console.log(`${this.username}, Welcome to our Website`);
        console.log(this); 
    }
}

obj.Welcome_message() // It prints the value for username "Bhavya" which is it's current value
obj.username = "Sam" // We change the value from Bhavya to Sam
obj.Welcome_message() // It prints the value for username "Sam" which is it's current value
console.log(this); // node environment refers the {} empty current context
// Note: the global object for "this" in browser is "Window" [try this in console in browser] (Asked in interview)
// Output in Browser: Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …} 

// =============================================================================
// 📌 2. ARROW FUNCTIONS VS REGULAR FUNCTIONS & SYNTAX
// =============================================================================
const fun = () => {
    const username = "Bhavya"
    console.log(this.username); // these will print undefine bcz it only works in object
}
fun();

function fun1() {
    const username = "Bhavya"
    console.log(this.username); // these will print undefine bcz it only works in object
}
fun1();

const person = {
    name: "Bhavya",
    greet() {
        console.log(this.name);
    }
};
person.greet();

// explicite type
const Addnum = (num1, num2) => {
    return num1 + num2
} // If you put {} then You must have to use return keyword 
console.log(Addnum(1, 2));

// implicite type
const Addtwo = (num1, num2) => ( num1 + num2 ) // If you use () then you don't need to use return keyword
console.log(Addtwo(1, 2));

// How to take Object in arrow

const return_obj = (username) => ({Username: username}) // If you want to return the object in arrow function then u must be wrapped it in parenthesis`()`
console.log(return_obj("Divya"))
console.log(return_obj("Kavya"))

const obj4 = {
    name: "Bhavya",
    welcomemsg: function(){console.log(`Hello User ${this.name}`)}
}
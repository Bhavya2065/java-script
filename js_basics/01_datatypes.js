/*
  =============================================================================
  📌 JAVASCRIPT DATATYPES, TYPES & HOISTING
  =============================================================================
  
  1. Primitive & Reference Types:
     - Primitives: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
     - Reference: Objects, Arrays, Functions.
     - Use Case: Store single immutable values or complex collection structures.
     - Example:
         let name = "Bhavya"; // String primitive
         let user = { name: "Bhavya" }; // Object reference

  2. Strict Mode ("use strict"):
     - Enforces stricter parsing and error handling in JS code.
     - Use Case: Prevents accidental global variables and legacy silent errors.
     - Example:
         "use strict";
          x = 10; // Throws ReferenceError

  3. Hoisting & Temporal Dead Zone (TDZ):
     - Hoisting: Moving variable and function declarations to the top of scope.
     - TDZ: Period between entering scope and `let`/`const` declaration where access throws ReferenceError.
     - Example:
         console.log(a); // undefined (var hoisted)
         var a = 5;
  =============================================================================
*/

"use strict"; // Enforce strict mode for cleaner and safer JS execution

// ===================== Example: use strict ========================
// personality = "calm";
// console.log(personality); // ReferenceError: personality is not defined {because of enable the strict mode in line 1 it gave me the error}

// ===================== Datatype Definitions ========================
let name = "Bhavya";        // String 
let age = 19;               // number
let isLoggedin = false;     // boolean
let a = null;               // contain empty field / value doesn't assign (Standalone value)
let b = undefined;          // cannot contain any value

// Other datatypes:
let id = Symbol("123");         // symbol
let bigNumber = 485938495839n;  // bigint
let user = {                    // object (most important)
    name: "Bhavya",
    age: 19
};
let colors = ["red", "green", "blue"]; // array (a type of object)
let obj = {}
// ===================== Table Display ========================
console.table([name, age, isLoggedin, a, b]);

// ===================== Checking Types (typeof) ========================
// "typeof" is used for knowing the datatype of any value.
console.log(typeof "Bhavya");
console.log(typeof 19);
console.log(typeof false);
console.log(typeof null);      // by default the typeof null is object. /* Interview Question */
console.log(typeof undefined); // by default the typeof undefined is undefined. /* Interview Question */
console.log(typeof obj); // by default the typeof undefined is undefined. /* Interview Question */


// typeof for other datatypes:
console.log(typeof id);        // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof user);      // object
console.log(typeof colors);    // object (arrays are a type of object in JavaScript)

// Declaration Without Initialization
var c; // Not giving any Error
let d; // Not giving any Error
// const e; // It gives the Error because we have to initialize it complesary

// =========================================================================
// HOISTING & TEMPORAL DEAD ZONE (TDZ)
// =========================================================================

// Hoisting: JavaScript moves variable and function declarations to the top 
// of their scope before executing the code.

// 1. Hoisting with var:
// 'var' variables are hoisted and initialized with 'undefined'.
console.log(varVariable); // Output: undefined
var varVariable = 10;
console.log(varVariable); // Output: 10

// 2. Hoisting with let and const (Temporal Dead Zone - TDZ):
// 'let' and 'const' are hoisted but not initialized.
// The period from the start of the block until the variable is declared is the TDZ.
// Accessing the variable in this zone throws a ReferenceError.

// console.log(letVariable); // Throws ReferenceError: Cannot access 'letVariable' before initialization
let letVariable = 20; // TDZ ends here for 'letVariable'
console.log(letVariable); // Output: 20

// 3. Function Hoisting:
// Regular functions are fully hoisted, so you can call them before declaration.
sayHello(); // Output: Hello!
function sayHello() {
    console.log("Hello!");
}

// Function expressions (using var, let, or const) follow variable hoisting rules.
// sayGoodbye(); // Throws TypeError: sayGoodbye is not a function (since var is hoisted as undefined)
var sayGoodbye = function() {
    console.log("Goodbye!");
};

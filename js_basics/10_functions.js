/*
  =============================================================================
  📌 FUNCTIONS, PARAMETERS & REST OPERATORS
  =============================================================================
  
  1. Parameters vs Arguments & Default Values:
     - Parameters: Variables listed in function definition (`function(name = "Sam")`).
     - Arguments: Actual values passed during invocation (`loginUser("Bhavya")`).
     - Default parameters apply when argument is `undefined`.

  2. Return Statement:
     - Functions without explicit `return` return `undefined` by default.

  3. Rest Operator (`...args`):
     - Bundles multiple dynamic argument inputs into an array.
     - Example:
         function calculateCartPrice(...num1) { return num1; }
  =============================================================================
*/

function AddtoNum(num1, num2) {
    console.log(num1 + num2);
}
AddtoNum(3, 5)
AddtoNum(3.5, 5)
AddtoNum(true, 2) // true --> 1
AddtoNum("Bhavya", 2)
AddtoNum("4", 2)
AddtoNum("4", "2")
AddtoNum(4, "2")
AddtoNum(4, null)
const res = AddtoNum(3, 6);
console.log(res); // Output: undefined (because we can't return anything so it return undefine bydefault) 
console.log();

function loginUser(username = "Sam") { // If no username passed then it take Sam bydefault
    if (username == undefined) {
        return 0
    }
    return `${username} is logged in`
}

console.log(loginUser("Bhavya")); // If we don't pass any value then it print undefined
console.log(loginUser()); // by default it takes sam
console.log();

// =============================================================================
// 📌 1. REST OPERATOR (...ARGS) & DYNAMIC PARAMETERS
// =============================================================================

function CalculatePrice(...num1) { // where I put ... before any value than it is either the rest operator or spread operator, In this case it is rest operator than How can I identify that we will see in next chapetrs.
    return num1
}
console.log(CalculatePrice(200, 300, 400));

// Use of rest operator(...) : If the passing argument is larger than the parameter size than it returns the array of those passing parameters

function Price(val1, val2, ...num1) {
    return num1 // It returns only [ 300, 4000 ]
}
console.log(Price(100, 200, 300, 4000));

// val1 = 100 , val2 = 200 and rest values makes array form and return them 


// =============================================================================
// 📌 2. PASSING OBJECTS TO FUNCTIONS
// =============================================================================

const Obj = {
    username: "Jinang",
    age: 22
}

function Handleobj(object) {
    console.log(object);
    console.log(`Username: ${object.username} and Age: ${object.age}`);
}
Handleobj(Obj)

Handleobj({
    username: "Sam",
    age: 25
}) // we can pass directly the all values

// =============================================================================
// 📌 3. PASSING ARRAYS TO FUNCTIONS
// =============================================================================

const array = [10, 20, 30, 40, 50]
function handleArray(array) {
    return array
}
const getArray = handleArray(array)
console.log(getArray);
// we can write also the above syntax without return as same as in object passing case

// =============================================================================
// 📌 4. FUNCTION EXPRESSIONS
// =============================================================================

const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(2));

// =============================================================================
// 📌 5. UNDERSTANDING 'THIS' IN ARROW FUNCTIONS VS REGULAR FUNCTIONS
// =============================================================================

// Case 1: Arrow function as an object method
const user = {
  name: "Sanjiv",

  // Arrow functions do NOT have their own 'this'.
  // They inherit 'this' from the outer lexical scope (which is global/module scope).
  greet: () => {
    console.log(this.name); // 'this' refers to global/module context, so this.name is undefined
  }
};

user.greet(); // Output: undefined


// Case 2: Nested arrow function inside a regular method
const user1 = {
  name: "Sanjiv",

  // Regular method: 'this' refers to the object calling the method (user1)
  greet() {

    // Arrow function: inherits 'this' from its enclosing function (greet)
    // Since 'this' inside greet() is user1, 'this' inside show() is also user1.
    const show = () => {
      console.log("In Arrow Method: ", this.name); // 'this' refers to user1, so this.name is "Sanjiv"
    };

    show();
  }
};

user1.greet(); // Output: "Sanjiv"

// =============================================================================
// 📌 6. VARIABLE SHADOWING & ILLEGAL SHADOWING
// =============================================================================

// 1. Variable Shadowing:
// When a variable in an inner scope has the same name as a variable in the outer scope.
// The inner variable "shadows" (hides) the outer variable.
let x = 10;
if (true) {
    let x = 20; // Shadows the outer 'x'
    console.log(x); // Output: 20 (inner scope value)
}
console.log(x); // Output: 10 (outer scope value)

// 2. Legal Shadowing:
// We can shadow a 'var' variable using 'let' or 'const' inside a block scope.
var y = 100;
if (true) {
    let y = 200; // Legal shadowing
    console.log(y); // Output: 200
}
console.log(y); // Output: 100

// 3. Illegal Shadowing:
// We cannot shadow a 'let' or 'const' variable using 'var' inside a block scope.
// This is because 'var' is block-ignored (function-scoped or global-scoped) 
// and tries to redeclare the same variable in the same scope, causing an error.
let z = 50;
if (true) {
    // var z = 100; // ILLEGAL SHADOWING! 
    // This will throw: SyntaxError: Identifier 'z' has already been declared
}
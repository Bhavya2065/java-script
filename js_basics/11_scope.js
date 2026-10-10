/*
  =============================================================================
  📌 SCOPE (GLOBAL, LOCAL & BLOCK SCOPE)
  =============================================================================
  
  1. Global vs Local Scope:
     - Global: Variables declared outside blocks are accessible everywhere.
     - Local/Function: Variables declared inside function scope are only accessible within it.

  2. Block Scope (`let`/`const`) vs Function Scope (`var`):
     - `let` and `const` obey block scope (`{}`).
     - `var` ignores block scope and leaks globally or to nearest function scope.
     - Example:
         if (true) { let a = 10; var b = 20; }
         a is ReferenceError outside block; b leaks outside block.

  3. Scope Chain & Lexical Scope:
     - Inner functions can access variables from outer parent functions (closure basis).
  =============================================================================
*/

// Use of scope( {} ): If we initialize the variable inside the scope and then printed outside of scope then error would be occure

// 1. Block scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a); // Error: a is not define
// console.log(b); // Error: b is not define
console.log(c); // but c is printed so that it is not a good practices and we must avoid

// 2. Function scope
function test() {
    let d = 10
    const e = 20
    var f = 30
}
// console.log(d); // Error: d is not define
// console.log(e); // Error: e is not define
// console.log(f); // Error: f is not defined

// =============================================================================
// 📌 LEXICAL SCOPE VS CLOSURE
// =============================================================================

// 1. Lexical Scope:
// An inner function can access variables of its parent function while running inside it.
function Big() {
    const name = "Bhavya"
    function Small() {
        const website = "yt"
        console.log(name);
    }
    // console.log(website); // Error: website is not defined (Parent cannot access child variables)
    Small() // Executed inside Big while Big is still active
}
Big()

// 2. Closure Note:
// Why the above is NOT a closure: Small() runs directly inside Big().
// For a Closure to happen: Big() must RETURN Small so Small can be called 
// outside LATER and still remember 'name' even after Big() has finished executing.
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter(); // makeCounter finishes execution here
console.log(counter()); // 1 (Remembers 'count' due to Closure)
console.log(counter()); // 2

// =============================================================================
// 📌 HOISTING & FUNCTION DECLARATIONS VS EXPRESSIONS
// =============================================================================

console.log(addone(2))
function addone(val) {
    return val + 1
}

// console.log(addTwo(2)); // Error because "Cannot access 'addTwo' before initialization"
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(2)); // It is valid

// Remember: We can call function before it's initialization, but We can't call variable before it's intialization
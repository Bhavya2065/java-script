/*
  =============================================================================
  📌 HIGHER-ORDER FUNCTIONS (HOF) & CLOSURES
  =============================================================================
  
  1. Higher-Order Functions (HOF):
     - Functions that accept other functions as arguments, or return functions as output.
     - Examples: `.map()`, `.filter()`, `.reduce()`, and custom wrapper functions like `once(fn)`.

  2. Closures:
     - A function's ability to "remember" and access variables from its outer lexical scope even after that outer function has finished executing.
     - Common Use Cases: Function call limiting (e.g., run once), data privacy/encapsulation, memoization.
     - Example:
         function outer() {
            let count = 0;
            return function inner() { count++; return count; };
         }
  =============================================================================
*/

// HOF => Higher Order Function 

// ========================================================
//                Problem Statment
// ========================================================

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called

// Correct Code 

let fn = (a, b, c) => a + b + c;
var once = function (fn) {
  let flag = 0;
  return function (...args) {
    if (flag == 0) {
      flag += 1;
      return fn(...args);
    }
  };
};

const onceFn = once(fn);
console.log(onceFn) // [Function (anonymous)]
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined, fn was not called

// =====================================================================
//                Important Note: From Wrong Code
// =====================================================================

// var once = function (fn) {
//   let flag = 0;
//   if (flag == 0) {
//     return function (...args) {
//       flag += 1;
//       return fn(...args);
//     };
//   }
// };

// When you run const onceFn = once(fn);, the JavaScript engine reads your function from top to bottom. It initializes flag = 0 and immediately evaluates if (flag === 0). Since that is true, it returns the inner function.

// From that point on, whenever you call onceFn(1, 2, 3), the engine only executes the code inside that returned inner function. It completely skips the if statement because that statement is outside the inner function's block. Therefore, flag keeps incrementing and fn keeps executing.

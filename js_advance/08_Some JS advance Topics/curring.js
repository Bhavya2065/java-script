/*
  Currying — Easy English

  What it is:
    - Currying turns a function that takes many inputs into several functions
      that each take one input. For example: `f(a, b)` becomes `f(a)(b)`.

  How it helps:
    - You can give some inputs now and others later (partial application).
    - Makes small reusable functions you can combine easily.

  Short interview answer:
    "Currying converts a multi-argument function into a chain of single-argument
    functions, which lets you apply arguments one at a time and reuse parts."
*/

function multiply(a) {
    return function (b) {
        return a * b;
    }
}

const mul = multiply(2); // mul is now a function that multiplies by 2
console.log(mul(3)); // 6
console.log(mul(4)); // 8

// ======================== Real World Application ========================

// A curried API call function
const makeRequest = (baseUrl) => (endpoint) => {
    return fetch(`${baseUrl}/${endpoint}`);
};

// Create a specific API fetcher for Github
const githubApi = makeRequest("https://api.github.com");

// Use it for different endpoints
githubApi("users/Bhavya2065");
githubApi("repos/Bhavya2065/java-script");

// Same but in different way

function callReqest(baseUrl) {
  return function(endpoint) {
    console.log(`${baseUrl}/${endpoint}`);
  }
}

const api = callReqest("https://api.github.com");
api("users/Bhavya2065");
api("repos/Bhavya2065/java-script");

// ===================== Infinite Currying ========================
// Function that can be called with arguments infinitely: a(1)(2)(3)...()

function a(num1) {
    return function (num2) {
        console.log(num2);
        if (num2 !== undefined) {
            return a(num1 + num2); // Recursive call: returns inner function with updated sum
        }
        return num1; // Base case: returns final sum when called with no arguments ()
    }
}

/* 
How it executes step-by-step: console.log(a(1)(2)(3)())

1. a(1):
   - num1 is 1.
   - Returns the inner function, keeping num1 = 1 in memory (closure).

2. (2):
   - The inner function runs with num2 = 2.
   - Prints 2.
   - Since num2 is not undefined, it calls a(1 + 2) which is a(3).
   - Returns a new inner function, keeping num1 = 3 in memory.

3. (3):
   - The new inner function runs with num2 = 3.
   - Prints 3.
   - Since num2 is not undefined, it calls a(3 + 3) which is a(6).
   - Returns a new inner function, keeping num1 = 6 in memory.

4. ():
   - The new inner function runs with num2 = undefined (no value passed).
   - Prints undefined.
   - Since num2 is undefined, it skips the if block and returns num1 (which is 6).

5. console.log():
   - Prints the final returned result: 6.
*/

console.log(a(1)(2)(3)());
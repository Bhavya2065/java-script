/*
  =============================================================================
  📌 NUMBERS & MATH OBJECT IN JAVASCRIPT
  =============================================================================
  
  1. Number Formatting Methods:
     - `.toFixed(digits)`: Formats number with fixed decimals.
     - `.toPrecision(precision)`: Formats number to specified length precision.
     - `.toLocaleString()`: Formats big numbers with region-based commas (en-IN, en-US).
     - Example:
         const n = 1000000;
         n.toLocaleString('en-IN'); // Output: "10,00,000"

  2. Math Object Utilities:
     - `Math.abs()`, `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.min()`, `Math.max()`.
     - `Math.random()`: Generates pseudo-random float between 0 (inclusive) and 1 (exclusive).
     - Formula for Random Number in Range (min to max):
         Math.floor(Math.random() * (max - min + 1)) + min
  =============================================================================
*/

const num = new Number(100)
console.log(num);
console.log(typeof num.toString());

// =============================================================================
// 📌 1. NUMBER FORMATTING & LOCALIZATION METHODS
// =============================================================================

console.log(num.toFixed(2)); // This method adds the zeros after the decimal 100.00

const num1 = 34.566
console.log(num1.toPrecision(4));
// How precision works: if we pass 2 then he round of two numbers from start and so on..
// if precision is 2 ------> 35
// if precision is 3 ------> 35.6
// if precision is 4 ------> 35.57
// if precision is 5 ------> 35.566 because after 566 there is no number
// if precision is 6 ------> 35.5660 

const bigValues = 1000000
console.log(bigValues.toLocaleString('en-US')); // It is used in US
console.log(bigValues.toLocaleString('en-IN')); // It is used in India
// It seperates with coma's like 10,000
console.log();
console.log();

// =============================================================================
// 📌 2. MATH OBJECT UTILITY METHODS
// =============================================================================

console.log(Math); // It is an Object
console.log(Math.PI); // It returns the value of PI
console.log(Math.abs(-4)); // It converts the negative value into positive
console.log(Math.round(2.4)); // It round off the value to it's next lower value
console.log(Math.round(2.5)); // It round off the value to it's next upper value
console.log(Math.ceil(3.1)); // It round it's value to it's next upper value eg. 2.1 --> 3, 4.1 ---> 5
console.log(Math.floor(5.9)); // It round off it's value to it's previous below value eg. 3.9 --> 3
console.log(Math.sqrt(16));
console.log(Math.max(3, 2));
console.log(Math.min(2, 3));
console.log();


// =============================================================================
// 📌 3. PSEUDO-RANDOM NUMBER GENERATION & FORMULAS
// ============================================================================= 

console.log(Math.random()); // by default it takes value between the 0 to 1
console.log((Math.random() * 10) + 1); // It gives the value between 1 to 11 (+1 is used for avoiding zero)
console.log(Math.floor((Math.random() * 10) + 1));

// If we take random number between any range then use this trick
const min = 10
const max = 100
console.log(Math.floor(Math.random() * (max - min) + min)); // Remember
// In this (max-min) + min = range between 10 to 100

/*
  =============================================================================
  📌 TYPE CONVERSION, COERCION & OPERATORS
  =============================================================================
  
  1. Explicit Type Conversion:
     - Using built-in constructors like `Number()`, `String()`, `Boolean()`.
     - Use Case: Converting input data into expected types for safe computation.
     - Example:
         let value = "33abc";
         let num = Number(value); // Output: NaN (typeof number)

  2. Coercion & Comparison Rules:
     - Loose Equality (`==`) performs implicit type coercion; Strict (`===`) checks value & type.
     - `null == 0` is false, but `null >= 0` is true (relational operators convert null to 0).
     - Example:
         console.log("2" === 2); // false

  3. Prefix & Postfix Increment:
     - Postfix (`x++`): Returns value BEFORE incrementing.
     - Prefix (`++x`): Increments first, then returns value.
  =============================================================================
*/

// =============================================================================
// 📌 TYPE CONVERSION RULES & COMPARISON COERCION
// =============================================================================

// 1. null is not converted to 0 with ==, but it is converted to 0 with comparison operators (>, <, >=, <=).

// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(undefined == 0); // true

// =============================================================================
// 📌 EXPLICIT TYPE CONVERSIONS (TO NUMBER, STRING, BOOLEAN)
// =============================================================================

let score = 33
console.log(typeof score); // number
console.log(typeof (score)); // number
console.log();
// The type of the variable score is number.

let score1 = "33"
console.log(typeof score1); // string
console.log(typeof (score1)); // string
console.log();
// The type of the variable score is String due to write under "".

/* Note: you can easily convert datatypes of any value easily using js */
let score2 = "33abc"
console.log(typeof score2);
console.log(typeof (score2));
let stringinnumber = Number(score2) // This line/syntax is converting string value into number(String to Number).
console.log(typeof stringinnumber);
console.log(stringinnumber);  // It is mixure of number and Strig, so it's print NaN(not a number).
console.log();

let score3 = 123
console.log(typeof score3);
console.log(typeof (score3));
let numberinstring = String(score3) // This line/syntax is converting string value into number(Number to String).
console.log(typeof numberinstring);
console.log(numberinstring); 
console.log();

let score4 = null
console.log(typeof score4);
console.log(typeof (score4));
let nullinNumber = Number(score4) // This line/syntax is converting object value into number(Number to String).
console.log(typeof nullinNumber);
console.log(nullinNumber); // It prints 0.
console.log();

let score5 = undefined
console.log(typeof score5);
console.log(typeof (score5));
let undefinedinnum = Number(score5) // This line/syntax is converting string value into number(Number to String).
console.log(typeof undefinedinnum);
console.log(undefinedinnum); // It prints not a number.
console.log();

let score6 = true
console.log(typeof score6);
console.log(typeof (score6));
let boolinnum = Number(score6) // This line/syntax is converting string value into number(Number to String).
console.log(typeof boolinnum);
console.log(boolinnum); // It prints "1".
console.log();

let score7 = "Bhavya"
console.log(typeof score7);
console.log(typeof (score7));
let strtonum = Number(score7) // This line/syntax is converting string value into number(Number to String).
console.log(typeof strtonum);
console.log(strtonum); // It prints not a number.
console.log();

/* summery: type conversion: to Number */
// "33"(String) => 33
// "33abc"(num and string both) => NaN
// true(bool) => 1, false => 0
// null(empty value) => 0
// undefined(value not defined) => NaN
// 123(Number) => 123   

/* summery: type conversion: to boolean */
// "33"(String) => true
// "33abc"(num and string both) => true
// null(empty value) => false
// undefined(value not defined) => false
// 123(Number) => true
// ""(Empty string) => false   

/* summery: type conversion: to string */
// "33abc"(num and string both) => 33abc
// true(bool) => true, false => false
// null(empty value) => null
// undefined(value not defined) => undefined
// 123(Number) => 123 

// =============================================================================
// 📌 ARITHMETIC & STRING CONCATENATION OPERATIONS
// =============================================================================

let v = 3
let negative_v = -v
console.log(negative_v); // It prints -3.

console.log(2 ** 3); // It means 2^3 = 8.

// Concatinate of the two string.
let s1 = "Hello"
let s2 = " Bhavya"
console.log(s1 + s2); // Hello Bhavya
console.log("1" + 1); // Output:11
console.log(1 + "1"); // Output:11
console.log("1" + 1 + 1); // Output:111
console.log(1 + 1 + "1"); // Output: 21
console.log("Bhavya" + 1); // Output:Bhavya1
console.log("1" + (1 + 1)); // Output:12

// =============================================================================
// 📌 PREFIX VS POSTFIX INCREMENT OPERATORS
// =============================================================================
let x = 3
let y = ++x
console.log(y); // It prints 4.
// first increment and the assign the value to the variable y.


let a = 3
let b = a++
console.log(b); // It prints 3.

// first assign and then increment the value, so does not change in value.



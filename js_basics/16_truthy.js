/*
  =============================================================================
  📌 TRUTHY, FALSY & NULLISH COALESCING OPERATOR
  =============================================================================
  
  1. Falsy Values in JavaScript:
     - `false`, `0`, `-0`, `0n` (BigInt), `""` (empty string), `null`, `undefined`, `NaN`.

  2. Truthy Values in JavaScript:
     - Everything else! Including `"0"`, `'false'`, `" "`, `[]` (empty array), `{}` (empty object), `function(){}`.

  3. Logical Operators (&, ||, !, ??):
     - Logical AND (`&&`): Returns first falsy value, or last value if all truthy.
     - Logical OR (`||`): Returns first truthy value, or last value if all falsy.
     - Logical NOT (`!`): Flips boolean value. Double NOT (`!!`) converts value to strict boolean (`true`/`false`).
     - Nullish Coalescing (`??`): Returns right-hand side ONLY if left-hand side is `null` or `undefined` (ignores `0`, `""`, `false`).
     - Non-Boolean Return Values: Operators return actual values (operands), NOT strictly true/false.
     - Precedence & Grouping: `!` > `&&` > `||` > `??`. Cannot combine `??` with `&&`/`||` without parentheses.
  =============================================================================
*/

// ==========================================
// 1. TRUTHY AND FALSY VALUES
// ==========================================

// Falsy values: Values that evaluate to false in boolean contexts.
// List: false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// Truthy values: All values that are not falsy.
// Examples: true, 1, [], {}, "0", 'false', " ", function(){}

const userEmail = []; // Empty array is a truthy value

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Do not get user email");
}

// ==========================================
// 2. CHECKING EMPTY STRUCTURES
// ==========================================

// How to check if an Array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// How to check if an Object is empty
const obj = {};
console.log(Object.keys(obj)); // Returns an array of keys: []
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}

// ==========================================
// 3. COMPARISON & LOGICAL OPERATORS
// ==========================================

// Loose equality checks (performs type coercion)
console.log("================== Equality Comparisons ==================");
console.log(false == 0);  // true
console.log(false == ''); // true
console.log(0 == '');     // true

if (false == 0 && false == '' && 0 == '') {
    console.log("it is true"); // Output: it is true
}

// Logical AND (&&) vs Bitwise AND (&)
// && uses short-circuiting: if the first value is false, it stops and returns false.
// & evaluates both sides and performs a bitwise operation on the bits.
let score1 = 100;
let score2 = 200;

if (score1 == 100 & score2 == 100) { // Evaluates both sides (bitwise AND)
    console.log("Console 1 Executed");
}
if (score1 == 100 && score2 == 200) { // Evaluates score2 only if score1 is true (logical AND)
    console.log("Console 2 Executed");
}

// Logical OR (||) vs Bitwise OR (|)
// || uses short-circuiting: if the first value is true, it stops and returns it.
// | evaluates both sides and performs a bitwise operation on the bits.
if (score1 == 200 | score2 == 200) { // Evaluates both sides
    console.log("Console 3 Executed");
}
if (score1 == 200 || score2 == 200) { // Evaluates score2 only if score1 is false
    console.log("Console 4 Executed");
}

// ==========================================
// 4. TERNARY OPERATOR
// ==========================================
// Syntax: condition ? expressionIfTrue : expressionIfFalse

const score = 100;
score == 100 ? console.log("true") : console.log("False");

// ==========================================
// 5. NULLISH COALESCING OPERATOR (??)
// ==========================================
// Returns the right-hand side value if the left-hand side is null or undefined.
// Commonly used to set default values (especially when reading from databases).

console.log("================== Nullish coalescing operator (??) ==================");
let val1 = 5 ?? 10;          // 5 (5 is neither null nor undefined)
let val2 = null ?? 10;       // 10 (left side is null)
let val3 = undefined ?? 10;  // 10 (left side is undefined)
let val4 = undefined ?? null; // null (left side is undefined, returns right side)
let val41 = null ?? undefined; // undefined (left side is null, returns right side)
let val5 = undefined ?? "Hello"; // null (left side is undefined, returns right side)

console.log(val1); // 5
console.log(val2); // 10
console.log(val3); // 10
console.log(val4); // null
console.log(val41); // undefined    
console.log(val5); // Hello

// ==========================================
// 6. LOGICAL ASSIGNMENT OPERATORS (ES2021)
// ==========================================

let name = "anil";
let age = 29;
let data = undefined;

// Logical AND assignment (&&=)
// Assigns the right value to the left only if the left value is truthy.
console.log(name &&= age); // name is truthy, so name becomes 29. Output: 29

// Logical OR assignment (||=)
// Assigns the right value to the left only if the left value is falsy.
console.log(data ||= age); // data is undefined (falsy), so data becomes 29. Output: 29

// Nullish assignment (??=)
// Assigns the right value to the left only if the left value is null or undefined.
data = undefined;
console.log(data ??= age); // data is undefined, so data becomes 29. Output: 29

// ==========================================
// 7. LOGICAL OPERATORS EDGE CASES & SUMMARY
// ==========================================

// A. Non-Boolean Return Values:
// Logical operators return actual operands, not strictly booleans.
console.log("hello" && 0 && "world"); // 0 (returns first falsy value)
console.log("" || NaN || "fallback"); // "fallback" (returns first truthy value)

// B. Double NOT (!!) Conversion:
// Forces any value to a strict boolean (true/false).
console.log(!![]);  // true (empty array is truthy)
console.log(!"");   // true (empty string is falsy, flipped by !)

// C. Short-Circuit Execution & Side Effects:
// Functions/assignments on the right side only run if evaluated.
let tracker = 0;
false && (tracker = 10); // Short-circuits! tracker remains 0
console.log(tracker); // 0

// D. Operator Precedence & Syntax Rules:
// ! > && > || > ??
// Syntax Rule: Cannot combine ?? with && or || without parentheses:
// Example: (null ?? "foo") && "bar" -> "bar"
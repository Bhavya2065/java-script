# JS Revision Notes

## 📘 Part 1: JavaScript Basics
- [1. Data Types & Hoisting](#1-data-types--hoisting)
- [2. Stack vs Heap Memory](#2-stack-vs-heap-memory)
- [3. Type Conversion & Coercion](#3-type-conversion--coercion)
- [4. Strings & Methods](#4-strings--methods)
- [5. Numbers & Math Object](#5-numbers--math-object)
- [6. Date & Time](#6-date--time)
- [7. Control Flow & Conditionals](#7-control-flow--conditionals)
- [8. Truthy, Falsy & Logical Operators](#8-truthy-falsy--logical-operators)
- [9. Loops & Iteration](#9-loops--iteration)
- [10. Functions & Parameters](#10-functions--parameters)
- [11. Scope (Function vs Block)](#11-scope-function-vs-block)
- [12. Arrow Functions & this](#12-arrow-functions--this)
- [13. IIFE (Immediately Invoked Function Expressions)](#13-iife)
- [14. JS Behind the Scenes (Execution Context & Call Stack)](#14-js-behind-the-scenes)
- [15. Objects in Depth](#15-objects-in-depth)
- [16. Arrays & Array Methods](#16-arrays--array-methods)
- [17. Spread, Rest & Destructuring](#17-spread-rest--destructuring)
- [18. Set Data Structure](#18-set-data-structure)
- [19. Optional Chaining (?.)](#19-optional-chaining)
- [20. Higher-Order Functions & Closures](#20-higher-order-functions--closures)
- [21. Debugging & Comments](#21-debugging--comments)
- [22. Basic DOM Manipulation & Event Listeners](#22-dom-manipulation--event-listeners)

## 🚀 Part 2: Advanced JavaScript
- [23. Advanced DOM Manipulation & Traversal](#23-advanced-dom-manipulation--traversal)
- [24. Event Propagation (Bubbling, Capturing) & Delegation](#24-event-propagation--delegation)
- [25. Asynchronous Timers (setTimeout & setInterval)](#25-asynchronous-timers)
- [26. Promises, Async/Await & Fetch API](#26-promises-async-await--fetch-api)
- [27. Object-Oriented JS (OOP), Prototypes & Classes](#27-oop-prototypes--classes)
- [28. call(), apply(), and bind()](#28-call-apply-and-bind)
- [29. Property Descriptors & Object.defineProperty()](#29-property-descriptors)
- [30. Advanced Closures & Practical Patterns](#30-advanced-closures)
- [31. Function Currying](#31-function-currying)
- [32. Generator Functions (function* & yield)](#32-generator-functions)
- [33. WeakMap & WeakSet](#33-weakmap--weakset)

---

# 📘 Part 1: JavaScript Basics

---

<h2 id="1-data-types--hoisting">1. Data Types & Hoisting</h2>

### 7 Primitive Types (Immutable, Stored by Value)
`String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`

### Reference Types (Mutable, Stored by Reference)
`Object`, `Array`, `Function`

### `typeof` Quirks
```javascript
typeof "text"        // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"  <-- Special quirk (Interview Question)
typeof Symbol("id")  // "symbol"
typeof 10n           // "bigint"
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"
```

### Strict Mode (`"use strict"`)
Enforces strict parsing and catches silent bugs (prevents undeclared variables).
```javascript
"use strict";
x = 10; // ReferenceError: x is not defined
```

### Hoisting & TDZ (Temporal Dead Zone)
- **Hoisting**: Variable and function declarations are moved to the top of their scope before execution.
- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but placed in the **TDZ** (Temporal Dead Zone) until initialized. Accessing them early throws `ReferenceError`.

```javascript
console.log(a); // undefined
var a = 5;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

### 🎯 Interview Q&A

> **Q1: What are data types in JavaScript, and how many are there?**  
> **A:** JavaScript has 2 categories: **7 Primitive types** (`String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`) which are immutable and stored by value, and **Reference types** (`Object`, `Array`, `Function`) which are mutable and stored by reference in memory.

> **Q2: Why does `typeof null` return `"object"`?**  
> **A:** It is a famous legacy bug from the very first version of JavaScript. In early JS, values were represented with type tags in binary, and `null` shared the `000` type tag with objects. It was never fixed to avoid breaking older websites.

> **Q3: What is Hoisting and Temporal Dead Zone (TDZ)?**  
> **A:** Hoisting moves variable and function declarations to the top of their scope before code runs. `var` is initialized with `undefined`. `let` and `const` are also hoisted, but they remain uninitialized in the **Temporal Dead Zone (TDZ)** until execution reaches their declaration line. Accessing them in TDZ throws a `ReferenceError`.

> **Q4: What is Strict Mode (`"use strict"`)?**  
> **A:** It enables strict parsing in JavaScript. It prevents accidental bugs, such as assigning values to undeclared variables (`x = 10`), by throwing a `ReferenceError`.

---

<h2 id="2-stack-vs-heap-memory">2. Stack vs Heap Memory</h2>

### Stack (Primitives) vs Heap (Reference Types)
- **Stack Memory**: Fast, fixed size. Stores primitive values directly. Copying creates an independent **copy**.
- **Heap Memory**: Dynamic size. Stores complex objects/arrays. Stack variable only holds a **reference pointer** to the Heap address.

```javascript
// Stack (Pass by Value)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// Heap (Pass by Reference)
let user1 = { name: "Bhavya" };
let user2 = user1; // points to the same memory location
user2.name = "Sam";
console.log(user1.name); // "Sam" (changed!)
```

### Reassignment vs Mutation
- **Mutating property** (`obj.name = "X"`): Modifies the shared data in Heap.
- **Reassigning variable** (`obj = null`): Only cuts that single pointer.

### 🎯 Interview Q&A

> **Q1: What is the difference between Stack and Heap memory in JavaScript?**  
> **A:** Stack memory stores primitive values directly by value (fast, fixed size). Heap memory stores complex non-primitive data (objects, arrays) by reference address (dynamic size).

> **Q2: What is the difference between reassigning a variable and mutating an object property?**  
> **A:** Mutating a property (`obj.age = 21`) changes the actual object data in Heap memory, affecting all variables pointing to that object. Reassigning a variable (`obj = null`) only cuts that single variable's pointer.

---

<h2 id="3-type-conversion--coercion">3. Type Conversion & Coercion</h2>

### Explicit Conversion
```javascript
Number("33")      // 33
Number("33abc")   // NaN (typeof is still "number")
Number(null)      // 0
Number(undefined) // NaN
Number(true)      // 1

String(123)       // "123"
Boolean(1)        // true
Boolean(0)        // false
Boolean("")       // false
```

### The `+` vs `-` Arithmetic Rule
* **`+` operator**: Prefers strings. If any side is a string, it concatenates.
* **`-`, `*`, `/` operators**: Prefer numbers. They convert strings into numbers.

```javascript
"5" + 2   // "52" (String)
"5" - 2   // 3 (Number)
10 + 10 + "10" // "2010"
"10" + 10 + 10 // "101010"
```

### Comparison Coercion (`==` vs `===`)
- `==` (Loose): Compares values with implicit type coercion.
- `===` (Strict): Checks both value AND type without coercion.

```javascript
"2" == 2   // true
"2" === 2  // false

// Tricky Null Comparison:
null == 0  // false (equality check does not convert null to 0)
null >= 0  // true  (relational operators convert null to 0)
```

### Prefix (`++x`) vs Postfix (`x++`)
```javascript
let x = 5;
let y = x++; // Postfix: returns 5 first, then x becomes 6
let z = ++x; // Prefix: x becomes 7 first, then returns 7
```

### 🎯 Interview Q&A

> **Q1: What is the difference between explicit conversion and implicit coercion?**  
> **A:** Explicit conversion is when you manually convert data types using built-in constructors like `Number()` or `String()`. Implicit coercion is when JavaScript automatically converts types behind the scenes (e.g. `"5" - 2` becomes `3`).

> **Q2: How does the `+` operator behave differently from `-`, `*`, and `/`?**  
> **A:** If any side is a string, the `+` operator converts everything to strings and concatenates them. The `-`, `*`, and `/` operators always convert strings to numbers to perform mathematical operations.

> **Q3: What is the difference between `==` and `===`?**  
> **A:** `==` (loose equality) compares values after automatic type coercion. `===` (strict equality) compares both value and data type without any type conversion.

> **Q4: Why is `null == 0` false, but `null >= 0` true?**  
> **A:** Equality checks (`==`) do not convert `null` to a number (null only equals undefined). Relational operators (`>`, `<`, `>=`, `<=`) convert `null` to `0`, making `0 >= 0` evaluate to `true`.

> **Q5: What is the difference between postfix (`x++`) and prefix (`++x`)?**  
> **A:** Postfix (`x++`) returns the current value first, then increments by 1. Prefix (`++x`) increments by 1 first, then returns the updated value.

---

<h2 id="4-strings--methods">4. Strings & Methods</h2>

Strings are immutable in JavaScript (you cannot change individual characters in place).

### Template Literals
```javascript
const name = "Bhavya";
console.log(`Hello, my name is ${name}`); // Modern string interpolation
```

### Essential String Methods
```javascript
const str = "JavaScript";

str.length;              // 10
str.charAt(0);           // "J"
str.indexOf("S");        // 4
str.includes("Script");  // true

str.slice(0, 4);         // "Java" (supports negative indexes)
str.substring(0, 4);     // "Java" (does not support negative indexes)

"  hello  ".trim();      // "hello"
"apple,banana".split(","); // ["apple", "banana"]
"hello world".replace("world", "JS"); // "hello JS"
```

### 🎯 Interview Q&A

> **Q1: Are strings mutable in JavaScript?**  
> **A:** No, strings are primitive and completely immutable. Once created, individual characters cannot be changed in place (`str[0] = 'X'` fails). All string methods return a brand new string.

> **Q2: What is the difference between `.slice()` and `.substring()`?**  
> **A:** Both extract a portion of a string, but `.slice()` supports negative indexes (counting backward from the end), while `.substring()` treats negative values as `0`.

> **Q3: What are template literals and why are they preferred?**  
> **A:** Template literals use backticks (`` ` ``) and `${}` syntax. They allow string interpolation (embedding variables directly) and clean multi-line strings without messy `+` concatenation.

---

<h2 id="5-numbers--math-object">5. Numbers & Math Object</h2>

### Number Formatting Methods
```javascript
const num = 123.4567;

num.toFixed(2);         // "123.46" (fixed decimal places)
num.toPrecision(4);     // "123.5"  (total significant digits)

const big = 1000000;
big.toLocaleString("en-IN"); // "10,00,000" (Indian numbering system)
```

### Useful Math Methods
```javascript
Math.abs(-5);         // 5
Math.round(4.6);      // 5
Math.floor(4.9);      // 4 (rounds down)
Math.ceil(4.1);       // 5 (rounds up)
Math.min(2, 5, 1);    // 1
Math.max(2, 5, 1);    // 5
```

### Formula: Random Integer in Range (`min` to `max`)
```javascript
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### 🎯 Interview Q&A

> **Q1: What is the difference between `.toFixed()` and `.toPrecision()`?**  
> **A:** `.toFixed(n)` formats the number with fixed digits *after the decimal point*. `.toPrecision(n)` formats the number to have a total count of *n significant digits* across the whole number. Both return strings.

> **Q2: How do you generate a random integer within a specific range (`min` to `max`)?**  
> **A:** Use `Math.floor(Math.random() * (max - min + 1)) + min`. `Math.random()` generates a float between 0 and 1, multiplying by the range shifts it, and `Math.floor()` rounds down to a whole integer.

---

<h2 id="6-date--time">6. Date & Time</h2>

### Initializing Dates
Month index is **0-based** in numbers: `0` = January, `11` = December.
```javascript
const now = new Date();
const customDate = new Date(2025, 0, 25); // Jan 25, 2025
```

### Common Date Methods
```javascript
now.toString();           // Full string representation
now.toISOString();        // ISO format (UTC)
now.toLocaleDateString(); // e.g. "25/1/2025" (based on locale)
now.getTime();            // Milliseconds since Jan 1, 1970
Date.now();               // Current timestamp in ms (quick access)
```

### 🎯 Interview Q&A

> **Q1: Why does `new Date(2025, 0, 1)` create a date for January instead of December?**  
> **A:** In JavaScript's `Date` object, months are 0-indexed (0 = January, 11 = December). When passing month as a number, you must subtract 1 from the calendar month number.

> **Q2: What does `Date.now()` return?**  
> **A:** It returns the current timestamp in milliseconds that have elapsed since the Unix Epoch (January 1, 1970 UTC). It is the fastest way to get current time without creating a `new Date()` object.

---

<h2 id="7-control-flow--conditionals">7. Control Flow & Conditionals</h2>

### `if - else if - else`
```javascript
if (score > 90) {
    console.log("A");
} else if (score > 75) {
    console.log("B");
} else {
    console.log("C");
}
```

### `switch - case` (Remember `break`!)
Without `break`, execution continues through all subsequent cases (fall-through).
```javascript
const role = "admin";
switch (role) {
    case "admin":
        console.log("Full Access");
        break;
    case "user":
        console.log("Limited Access");
        break;
    default:
        console.log("Guest");
}
```

### Ternary Operator (`condition ? trueVal : falseVal`)
```javascript
const status = age >= 18 ? "Adult" : "Minor";
```

### 🎯 Interview Q&A

> **Q1: What happens if you forget to write `break` in a `switch-case` statement?**  
> **A:** JavaScript exhibits "fall-through" behavior: it executes the matched case and keeps executing all subsequent cases until it finds a `break` or finishes the block.

> **Q2: When should you use a ternary operator instead of `if-else`?**  
> **A:** Use the ternary operator (`condition ? trueVal : falseVal`) for short, single-line conditional assignments. For multi-step logic or multiple conditions, use standard `if-else` for readability.

---

<h2 id="8-truthy-falsy--logical-operators">8. Truthy, Falsy & Logical Operators</h2>

### The 8 Falsy Values in JavaScript
Everything else in JavaScript is **truthy**!
1. `false`
2. `0`
3. `-0`
4. `0n` (BigInt zero)
5. `""` (empty string)
6. `null`
7. `undefined`
8. `NaN`

> **Common Truthy Surprises**: `"0"`, `'false'`, `" "` (string with space), `[]` (empty array), `{}` (empty object), `function(){}`.

### Logical Operators
- **`&&` (AND)**: Returns the first falsy value, or the last value if all are truthy.
- **`||` (OR)**: Returns the first truthy value, or the last value if all are falsy.
- **`??` (Nullish Coalescing)**: Only falls back if left side is `null` or `undefined` (does NOT treat `0` or `""` as nullish).

```javascript
let count = 0;
console.log(count || 10); // 10 (because 0 is falsy for ||)
console.log(count ?? 10); // 0  (preserves 0 because it's not null/undefined!)
```

### 🎯 Interview Q&A

> **Q1: What are all the falsy values in JavaScript?**  
> **A:** There are exactly 8 falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. All other values in JavaScript are truthy.

> **Q2: Why are empty arrays `[]` and empty objects `{}` truthy?**  
> **A:** All objects and arrays are reference types stored in Heap memory. Any reference to an object, even if empty, evaluates to `true` in a boolean check.

> **Q3: What is the difference between OR (`||`) and Nullish Coalescing (`??`)?**  
> **A:** `||` falls back for ANY falsy value (including `0`, `""`, and `false`). `??` only falls back if the value is strictly `null` or `undefined`, preserving valid values like `0` or `""`.

---

<h2 id="9-loops--iteration">9. Loops & Iteration</h2>

### Standard Loops
- `for`: Count-controlled loop.
- `while`: Runs while condition is true.
- `do-while`: Executes **at least once** before checking condition.
- `break`: Stops and exits the loop immediately.
- `continue`: Skips the current iteration and moves to next.

### `for...of` vs `for...in`
| Loop | Best Used For | Iterates Over |
| :--- | :--- | :--- |
| `for...of` | Arrays, Strings, Sets, Maps | **Values** |
| `for...in` | Objects (and array indexes) | **Keys / Properties** |

```javascript
// for...of (Values)
const fruits = ["apple", "banana", "orange"];
for (const item of fruits) {
    console.log(item); // "apple", "banana", "orange"
}

// for...in (Keys)
const user = { name: "Bhavya", age: 20 };
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
```

### 🎯 Interview Q&A

> **Q1: What is the difference between `for...of` and `for...in`?**  
> **A:** `for...of` iterates over the **values** of iterable collections (like Arrays, Strings, Sets). `for...in` iterates over the **keys** or property names of an Object.

> **Q2: What is the difference between `break` and `continue`?**  
> **A:** `break` stops the loop completely and exits it. `continue` skips only the current iteration and moves immediately to the next step.

> **Q3: What is the difference between `while` and `do-while`?**  
> **A:** A `while` loop checks condition first (may run 0 times). A `do-while` loop executes code first and checks condition after, guaranteeing it runs at least once.

---

<h2 id="10-functions--parameters">10. Functions & Parameters</h2>

### Function Declaration vs Expression
```javascript
// Function Declaration (Hoisted)
function greet() { return "Hello"; }

// Function Expression (Not hoisted)
const greetExp = function() { return "Hello"; };
```

### Parameters vs Arguments
- **Parameters**: Variables defined in function signature.
- **Arguments**: Real values passed when calling function.

### Default Parameters & Rest Parameter
```javascript
function welcome(user = "Guest", ...hobbies) {
    console.log(`Welcome ${user}`);
    console.log(hobbies); // Array of rest arguments
}
welcome("Bhavya", "coding", "gaming");
```

### 🎯 Interview Q&A

> **Q1: What is the difference between a function declaration and a function expression?**  
> **A:** Function declarations (`function foo() {}`) are hoisted and can be called before their definition. Function expressions (`const foo = function() {}`) are assigned to variables and cannot be called before declaration.

> **Q2: What is the difference between parameters and arguments?**  
> **A:** Parameters are placeholder variable names written in the function definition. Arguments are the actual values passed into the function when calling it.

> **Q3: How do rest parameters work?**  
> **A:** Rest parameters (`...args`) collect multiple arguments into a real JavaScript array, allowing functions to accept any number of dynamic arguments.

---

<h2 id="11-scope-function-vs-block">11. Scope (Function vs Block)</h2>

- **Function Scope**: Variable is only accessible inside the function where it is declared.
- **Block Scope**: Variable inside `{ ... }` is only accessible inside that block (`let`, `const`).

### Comparison Table

| Keyword | Function Scoped? | Block Scoped? | Can be Reassigned? |
| :--- | :--- | :--- | :--- |
| `var` | ✅ Yes | ❌ No (leaks outside `{}`) | ✅ Yes |
| `let` | ✅ Yes | ✅ Yes | ✅ Yes |
| `const` | ✅ Yes | ✅ Yes | ❌ No |

```javascript
if (true) {
    var leaks = "I escape blocks";
    let blockOnly = "I stay inside";
}
console.log(leaks);     // "I escape blocks"
// console.log(blockOnly); // ReferenceError
```

### 🎯 Interview Q&A

> **Q1: What is the difference between function scope and block scope?**  
> **A:** Function scope means a variable is only accessible inside the function it was created in. Block scope means variables inside `{}` (like `if` statements or loops) cannot be accessed outside that block.

> **Q2: Why should we avoid using `var`?**  
> **A:** `var` ignores block scope and leaks outside `{}` blocks, causing accidental variable overwriting and bugs. `let` and `const` respect block scope.

---

<h2 id="12-arrow-functions--this">12. Arrow Functions & this</h2>

### Key Differences
1. **Syntax**: Compact syntax; implicit return if without braces `() => x + y`.
2. **`this` Binding**: 
   - Regular functions bind `this` to the object calling the function.
   - Arrow functions do **NOT** have their own `this`; they inherit lexical `this` from enclosing parent scope.

```javascript
const person = {
    name: "Ravi",
    regular: function() { console.log(this.name); }, // "Ravi"
    arrow: () => { console.log(this.name); }       // undefined (inherits outer scope)
};

// Returning an object from arrow function (requires parentheses):
const makeUser = (name) => ({ username: name });
```

### 🎯 Interview Q&A

> **Q1: How does `this` work differently in regular functions vs arrow functions?**  
> **A:** Regular functions get their own dynamic `this` based on how they are called. Arrow functions do NOT have their own `this`; they inherit `this` lexically from their enclosing parent scope.

> **Q2: Why should you avoid arrow functions as object methods?**  
> **A:** Arrow functions do not bind `this` to the object; instead, `this` points to the outer global context, making `this.propertyName` return `undefined`.

> **Q3: How do you implicitly return an object from an arrow function?**  
> **A:** Wrap the object in parentheses: `() => ({ key: value })`. Without parentheses, JavaScript mistakes `{}` for a function body block.

---

<h2 id="13-iife">13. IIFE (Immediately Invoked Function Expressions)</h2>

An IIFE runs immediately after it is defined.
- **Primary Goal**: Avoid polluting the global scope by keeping variables private.
- **Crucial Rule**: End previous and current IIFEs with a **semicolon `;`** so the parser knows where execution ends.

```javascript
// Named IIFE
(function connectDB() {
    console.log("DB Connected!");
})(); // Semicolon is mandatory!

// Arrow IIFE with parameter
((dbName) => {
    console.log(`Connected to ${dbName}`);
})("MySQL");
```

### 🎯 Interview Q&A

> **Q1: What is an IIFE and why is it used?**  
> **A:** An Immediately Invoked Function Expression is a function executed right after definition. It creates a private scope to prevent polluting the global namespace and avoid variable name collisions.

> **Q2: Why is a semicolon `;` mandatory after an IIFE?**  
> **A:** Without a semicolon, JavaScript's parser will treat the next function call as arguments to the current one, throwing a `TypeError: (intermediate value)(...) is not a function`.

---

<h2 id="14-js-behind-the-scenes">14. JS Behind the Scenes (Execution Context & Call Stack)</h2>

JavaScript is **single-threaded** and executes code in an **Execution Context**.

### 1. The Two Execution Phases
Whenever code runs:
1. **Memory Creation Phase**:
   - Variables are allocated memory and initialized to `undefined`.
   - Function declarations are stored with their full definition.
2. **Execution Phase**:
   - Code executes line-by-line.
   - Values are assigned to variables and functions are executed.

### 2. The Call Stack (LIFO - Last In, First Out)
- **Global Execution Context (GEC)** is pushed first.
- When a function is called, a **Function Execution Context (FEC)** is pushed on top.
- When function completes, it is popped off the stack.

### 🎯 Interview Q&A

> **Q1: What are the two phases of JavaScript execution context?**  
> **A:** Phase 1 is **Memory Creation Phase** (variables allocated as `undefined`, functions stored). Phase 2 is **Execution Phase** (code runs line-by-line and values are assigned).

> **Q2: How does the Call Stack manage function execution?**  
> **A:** The Call Stack uses LIFO (Last In, First Out). Global context is pushed first, each function call pushes a new execution context on top, and when a function finishes, it is popped off.

---

<h2 id="15-objects-in-depth">15. Objects in Depth</h2>

### Accessing & Modifying
```javascript
let car = { brand: "Toyota" };
car.brand = "Honda";         // Dot notation
car["color"] = "Red";        // Bracket notation

// Dynamic / Computed Keys
let dynamicKey = "engineType";
car[dynamicKey] = "V8";
```

### Symbols as Keys
Must use bracket syntax `[symKey]`:
```javascript
const mySym = Symbol("key1");
const obj = {
    [mySym]: "secretValue"
};
console.log(obj[mySym]); // "secretValue"
```

### Useful Object Methods & JSON
```javascript
Object.keys(car);    // Array of keys
Object.values(car);  // Array of values
Object.entries(car); // Array of [key, value] pairs

Object.freeze(car);  // Prevents modifying or adding properties

// JSON Conversion
const jsonStr = JSON.stringify(car); // Object to JSON string
const parsed = JSON.parse(jsonStr);  // JSON string to JS Object
```

### 🎯 Interview Q&A

> **Q1: When must bracket notation `obj[key]` be used instead of dot notation?**  
> **A:** Bracket notation is required when the key name has spaces, is stored in a dynamic variable, or is a `Symbol`.

> **Q2: What is the difference between `Object.freeze()` and `Object.seal()`?**  
> **A:** `Object.freeze()` stops all modifications (cannot add, delete, or change properties). `Object.seal()` prevents adding or deleting properties, but allows modifying existing property values.

> **Q3: What do `JSON.stringify()` and `JSON.parse()` do?**  
> **A:** `JSON.stringify()` turns a JavaScript object into a JSON text string. `JSON.parse()` converts a valid JSON string back into a JavaScript object.

---

<h2 id="16-arrays--array-methods">16. Arrays & Array Methods</h2>

### Mutating vs Non-Mutating Methods
- **Mutating** (changes original array): `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `reverse()`, `sort()`.
- **Non-Mutating** (returns new array): `slice()`, `concat()`, `filter()`, `map()`, `join()`.

### `slice()` vs `splice()` (Interview Favorite)
- `arr.slice(start, end)`: Non-destructive copy from `start` to `end-1`.
- `arr.splice(start, deleteCount, ...items)`: **Modifies original array**; removes or replaces elements.

### Advanced Array Methods
```javascript
// .map() -> returns new transformed array
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]

// .filter() -> returns elements matching condition
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

// .reduce() -> accumulates into single value
const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0); // 6

// Helpers
Array.isArray([1, 2]);       // true
Array.from("ABC");           // ["A", "B", "C"]
[1, [2, [3]]].flat(Infinity); // [1, 2, 3]
```

### 🎯 Interview Q&A

> **Q1: What is the difference between `slice()` and `splice()`?**  
> **A:** `slice(start, end)` is non-mutating and returns a new copy without modifying the original array. `splice(start, count, items)` is mutating and modifies the original array by deleting or inserting elements.

> **Q2: What is the difference between `.map()` and `.forEach()`?**  
> **A:** `.map()` returns a brand new array with transformed elements. `.forEach()` executes a callback for each element but always returns `undefined`.

> **Q3: How does `.reduce()` work?**  
> **A:** `.reduce((acc, curr) => ..., initialValue)` iterates through an array and accumulates all elements into a single result (e.g. sum or total count).

---

<h2 id="17-spread-rest--destructuring">17. Spread, Rest & Destructuring</h2>

### Spread (`...`) - Expands
```javascript
const arr1 = [1, 2];
const combined = [...arr1, 3, 4]; // [1, 2, 3, 4]

const user = { name: "Bhavya" };
const fullUser = { ...user, age: 20 };
```

### Rest (`...`) - Collects
```javascript
function sumAll(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
```

### Destructuring
```javascript
// Object Destructuring (with alias)
const { name: fullName, age } = { name: "Bhavya", age: 20 };

// Array Destructuring (with rest)
const [first, second, ...rest] = [10, 20, 30, 40];
```

### 🎯 Interview Q&A

> **Q1: What is the difference between Spread and Rest operators?**  
> **A:** Both use `...`. Spread expands/unpacks an iterable (array or object) into individual items. Rest collects multiple values into a single array (inside function parameters or destructuring).

> **Q2: What is Destructuring?**  
> **A:** Destructuring is ES6 syntax that lets you unpack values from arrays or properties from objects directly into distinct variables.

---

<h2 id="18-set-data-structure">18. Set Data Structure</h2>

A `Set` stores **unique** values of any type (automatically ignores duplicates).

### Common Use: Remove Duplicates from Array
```javascript
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums)]; // [1, 2, 3, 4, 5]
```

### Set Methods
```javascript
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.has(10);   // true
mySet.delete(20);
console.log(mySet.size); // 1
```

### 🎯 Interview Q&A

> **Q1: What is a `Set` and how is it different from an Array?**  
> **A:** A `Set` only stores unique values and automatically drops duplicates. Unlike arrays, items in a `Set` cannot be accessed by index (`set[0]` does not work).

> **Q2: What is the cleanest way to remove duplicates from an array?**  
> **A:** Pass the array into a Set and spread it back into an array: `[...new Set(array)]`.

---

<h2 id="19-optional-chaining">19. Optional Chaining (?.)</h2>

Safely accesses nested object properties without throwing a `TypeError` if an intermediate property is `null` or `undefined`.

```javascript
const user = {
    profile: {
        address: null
    }
};

// Safe navigation: returns undefined instead of throwing error
console.log(user?.profile?.address?.city); // undefined

// Also works on methods and arrays:
user.getDetails?.();
arr?.[0];
```

### 🎯 Interview Q&A

> **Q1: What problem does Optional Chaining (`?.`) solve?**  
> **A:** It prevents `TypeError: Cannot read properties of undefined/null` crashes when reading deeply nested properties. If an intermediate property is nullish, it returns `undefined` immediately.

> **Q2: Can optional chaining be used on functions and arrays?**  
> **A:** Yes! You can use `obj.func?.()` to safely call a method only if it exists, or `arr?.[index]` to safely read an array element.

---

<h2 id="20-higher-order-functions--closures">20. Higher-Order Functions & Closures</h2>

### Higher-Order Function (HOF)
A function that accepts another function as an argument, or returns a function.
Examples: `map()`, `filter()`, `reduce()`.

### Closure
A closure is when an inner function **remembers and has access to its outer lexical scope variables**, even after the outer function has finished executing.

```javascript
function createCounter() {
    let count = 0; // trapped in closure
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### 🎯 Interview Q&A

> **Q1: What is a Higher-Order Function (HOF)?**  
> **A:** A function that takes another function as an argument (like `.map()` or `.filter()`) or returns a function as its result.

> **Q2: What is a Closure in JavaScript?**  
> **A:** A closure is an inner function that remembers and retains access to variables from its outer parent scope, even after that parent function has finished executing.

---

<h2 id="21-debugging--comments">21. Debugging & Comments</h2>

### Comments
- `// Single line comment`
- `/* Multi line comment */`

### Debugging
- `console.log()`: Prints output in console.
- `console.table()`: Nicely formats arrays/objects in tabular view.
- `debugger;`: Pauses JavaScript execution in browser DevTools (F12) for line-by-line inspection.

### 🎯 Interview Q&A

> **Q1: What does the `debugger;` statement do?**  
> **A:** If browser DevTools (F12) are open, `debugger;` pauses code execution at that exact line, letting you inspect variables and step through code line-by-line.

> **Q2: What is the advantage of `console.table()`?**  
> **A:** It formats arrays and objects into a readable table with rows and columns, making structured data easier to inspect.

---

<h2 id="22-dom-manipulation--event-listeners">22. Basic DOM Manipulation & Event Listeners</h2>

### Selecting Elements
```javascript
const heading = document.getElementById("main-heading");
const button = document.querySelector(".my-btn");
const allItems = document.querySelectorAll(".item");
```

### Modifying Elements
```javascript
button.textContent = "Click Me";      // Updates text
button.innerHTML = "<b>Click Me</b>"; // Updates HTML
button.style.backgroundColor = "blue"; // Updates inline CSS
```

### Event Listeners
```javascript
button.addEventListener("click", (event) => {
    console.log("Button was clicked!", event);
});
```

### 🎯 Interview Q&A

> **Q1: What is the difference between `textContent` and `innerHTML`?**  
> **A:** `textContent` reads/writes plain text without parsing HTML tags (safe from XSS). `innerHTML` parses HTML tags and renders elements, which can be vulnerable to security injection if handling user input.

> **Q2: Why is `addEventListener()` better than inline `onclick` attributes?**  
> **A:** It separates JavaScript from HTML, allows multiple listeners on the same element without overwriting previous ones, and supports event bubbling/capturing options.

---

# 🚀 Part 2: Advanced JavaScript

---

<h2 id="23-advanced-dom-manipulation--traversal">23. Advanced DOM Manipulation & Traversal</h2>

### 1. Element Traversal
Navigate through the DOM hierarchy cleanly without re-querying:
- **Parent**: `element.parentElement`
- **Children**: `element.children` (HTMLCollection of element nodes)
- **First / Last Child**: `element.firstElementChild`, `element.lastElementChild`
- **Siblings**: `element.nextElementSibling`, `element.previousElementSibling`

```javascript
const parent = document.querySelector(".parent");
console.log(parent.children[0].innerText); // First child element
console.log(parent.firstElementChild);     // First element child
console.log(parent.children[0].nextElementSibling); // Second child
```

### 2. `NodeList` vs `HTMLCollection`
- **`NodeList`** (from `querySelectorAll`): Includes elements, text nodes, and comments. Supports `.forEach()`.
- **`HTMLCollection`** (from `getElementsByClassName` or `children`): Only includes HTML elements. Does **not** have `.forEach()`. Convert to an array first: `Array.from(collection).forEach(...)`.

### 3. Creating & Inserting Elements
```javascript
const div = document.createElement("div");
div.className = "card";
div.id = "card-1";
div.setAttribute("title", "card item");

// Fast text insertion using TextNode (Better performance than innerHTML)
const text = document.createTextNode("Hello World");
div.appendChild(text);

document.body.appendChild(div);
```

### 4. Editing & Removing Elements
```javascript
// Replace an element
const newHeading = document.createElement("h2");
newHeading.textContent = "Updated Heading";
const oldHeading = document.querySelector("h1");
oldHeading.replaceWith(newHeading);

// Remove an element
const item = document.querySelector(".delete-me");
item.remove(); // Direct removal
// Or via parent: item.parentElement.removeChild(item);
```

### 🎯 Interview Q&A

> **Q1: What is the difference between `NodeList` and `HTMLCollection`?**  
> **A:** `NodeList` (from `querySelectorAll`) can include elements and text nodes, and has built-in `.forEach()`. `HTMLCollection` (from `children` or `getElementsByClassName`) only contains elements, is live, and lacks `.forEach()` (must use `Array.from()`).

> **Q2: Why is `document.createElement()` and `appendChild()` better than `innerHTML` when inserting elements?**  
> **A:** Modifying `innerHTML += ...` causes the browser to re-parse the entire DOM tree inside that element, destroying existing event listeners. `createElement()` surgically inserts only the new node without repainting existing nodes.

---

<h2 id="24-event-propagation--delegation">24. Event Propagation (Bubbling, Capturing) & Delegation</h2>

### The 3 Phases of an Event
1. **Capturing Phase**: Event trickles DOWN from `window` → `document` → parent → target.
2. **Target Phase**: Event arrives at the clicked element.
3. **Bubbling Phase**: Event bubbles UP from target → parent → `document` → `window`.

### Bubbling vs Capturing Syntax
`element.addEventListener(event, callback, useCapture)`
- `useCapture = false` (Default): **Bubbling** (Bottom-to-Top).
- `useCapture = true`: **Capturing** (Top-to-Bottom).

```javascript
// Capturing (Runs first on parent)
parent.addEventListener("click", () => console.log("Parent clicked"), true);

// Bubbling (Runs second on child)
child.addEventListener("click", () => console.log("Child clicked"), false);
```

### Stopping Propagation & Default Action
- **`e.stopPropagation()`**: Stops the event from traveling further up or down the DOM tree.
- **`e.preventDefault()`**: Prevents standard browser behavior (e.g., stops a link from opening or form from reloading page).

```javascript
link.addEventListener("click", (e) => {
    e.preventDefault();   // Don't follow the URL
    e.stopPropagation();  // Don't alert parent elements
});
```

### Event Delegation
Instead of adding event listeners to hundreds of child items, attach a **single listener** to the common parent and check `e.target`.

```javascript
document.querySelector("#images-list").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        console.log("Image removed:", e.target.id);
        e.target.parentElement.remove();
    }
});
```

### 🎯 Interview Q&A

> **Q1: What is the difference between Event Bubbling and Event Capturing?**  
> **A:** Event Bubbling (default) travels upward from the clicked child target to its parent ancestors. Event Capturing travels downward from window/document to the target element.

> **Q2: What is Event Delegation and why is it useful?**  
> **A:** Event Delegation is attaching one event listener to a parent container instead of adding listeners to every child element. It uses less memory and works automatically for dynamically added child elements.

> **Q3: What is the difference between `e.stopPropagation()` and `e.preventDefault()`?**  
> **A:** `e.stopPropagation()` stops the event from bubbling up or capturing down the DOM tree. `e.preventDefault()` stops the default browser action (like following a link or submitting a form).

---

<h2 id="25-asynchronous-timers">25. Asynchronous Timers (setTimeout & setInterval)</h2>

JavaScript timers are handled by the browser's Web APIs, not the core JS engine.

### `setTimeout` (Run Once After Delay)
```javascript
// Run after 2000 milliseconds (2 seconds)
const timerId = setTimeout(() => {
    console.log("Executed once!");
}, 2000);

// Cancel the timer before it runs
clearTimeout(timerId);
```

### `setInterval` (Run Repeatedly Every Interval)
```javascript
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Tick ${count}`);
    
    if (count === 5) {
        clearInterval(intervalId); // Stop after 5 ticks
    }
}, 1000);
```

### 🎯 Interview Q&A

> **Q1: Does `setTimeout(fn, 0)` execute immediately?**  
> **A:** No. Even with `0ms`, it is handed to browser Web APIs. The callback is placed in the Task Queue and only runs after the Call Stack has completely finished executing all current synchronous code.

> **Q2: Why is it important to store the return value of `setInterval`?**  
> **A:** `setInterval` returns a unique timer ID. You must pass this ID to `clearInterval(timerId)` to stop recurring execution, otherwise it will run indefinitely and cause memory leaks.

---

<h2 id="26-promises-async-await--fetch-api">26. Promises, Async/Await & Fetch API</h2>

### 1. What is a Promise?
An object that represents the eventual completion or failure of an asynchronous operation.

**The 3 States**:
1. `Pending`: Initial state.
2. `Fulfilled`: Completed successfully (`resolve()` called).
3. `Rejected`: Failed (`reject()` called).

```javascript
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ user: "Bhavya", id: 101 });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});

// Consuming with .then(), .catch(), .finally()
promiseOne
    .then((data) => {
        console.log(data.user); // "Bhavya"
        return data.id;         // Chaining
    })
    .then((id) => console.log("User ID:", id))
    .catch((err) => console.error(err))
    .finally(() => console.log("Operation completed"));
```

### 2. `async / await` (Cleaner Syntax)
`async` functions always return a promise. `await` pauses execution until the promise resolves.
```javascript
async function consumePromise() {
    try {
        const response = await promiseOne;
        console.log("Async/Await response:", response);
    } catch (error) {
        console.error("Caught error:", error);
    }
}
consumePromise();
```

### 3. Fetch API
`fetch()` returns a Promise. HTTP error codes like `404` or `500` do NOT reject the fetch promise; only network failures do.
```javascript
async function getAllUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json(); // Must await .json() parsing!
        console.log(data);
    } catch (err) {
        console.error("Fetch failed:", err);
    }
}
```

### 🎯 Interview Q&A

> **Q1: What are the three states of a Promise?**  
> **A:** `Pending` (in progress), `Fulfilled` (resolved successfully), and `Rejected` (failed with an error). Once settled, a promise cannot change states.

> **Q2: What is the benefit of `async/await` over `.then()` chaining?**  
> **A:** `async/await` allows you to write asynchronous code that reads like clean synchronous code, and you can handle errors easily with standard `try...catch` blocks.

> **Q3: Why doesn't `fetch()` reject on an HTTP 404 or 500 status code?**  
> **A:** `fetch()` only rejects if there is a network failure or inability to complete the request. It treats 404 and 500 as completed HTTP responses; you must check `response.ok` manually.

---

<h2 id="27-oop-prototypes--classes">27. Object-Oriented JS (OOP), Prototypes & Classes</h2>

### 1. Constructor Function & `new` Keyword
The `new` keyword does 4 crucial steps behind the scenes:
1. Creates a brand new empty object `{}`.
2. Links the new object's `__proto__` to the constructor's `prototype`.
3. Binds `this` to the new empty object.
4. Returns the object automatically.

```javascript
function User(username, score) {
    this.username = username;
    this.score = score;
}

// Adding shared methods to prototype (Memory efficient)
User.prototype.increment = function() {
    this.score++;
};

const user1 = new User("Alice", 10);
user1.increment();
console.log(user1.score); // 11
```

### 2. ES6 Classes & Inheritance
Classes are syntactic sugar over JavaScript's prototype-based inheritance.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, I am ${this.name}`;
    }

    // Static method: Belongs to the class, not instances
    static getSpecies() {
        return "Homo sapiens";
    }
}

class Student extends Person {
    constructor(name, rollNo) {
        super(name); // Calls parent constructor
        this.rollNo = rollNo;
    }

    study() {
        return `${this.name} is studying.`;
    }
}

const s1 = new Student("Bhavya", 101);
console.log(s1.greet());          // "Hello, I am Bhavya"
console.log(Person.getSpecies()); // "Homo sapiens"
```

### 3. Getters & Setters (`get` / `set`)
Used to control how properties are accessed or modified.
> **Important**: Always use a backing field (e.g. `_password`) to avoid infinite recursion (`RangeError: Maximum call stack size exceeded`).

```javascript
class Account {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password.toUpperCase()}###`;
    }

    set password(value) {
        this._password = value; // Stored in _password
    }
}
const acc = new Account("test@mail.com", "secret123");
console.log(acc.password); // "SECRET123###"
```

### 🎯 Interview Q&A

> **Q1: What 4 steps happen when the `new` keyword is used?**  
> **A:** 1) A new empty object `{}` is created. 2) Its prototype (`__proto__`) is linked to constructor `prototype`. 3) `this` is bound to the new object. 4) The new object is returned.

> **Q2: Why should methods be added to `Constructor.prototype` instead of inside the constructor?**  
> **A:** Methods inside the constructor are duplicated in memory for every instance created. Methods on `prototype` are defined once and shared by all instances, saving memory.

> **Q3: What is the purpose of `super()` in class inheritance?**  
> **A:** `super()` calls the constructor of the parent class and initializes `this` for the subclass. In derived classes, calling `super()` is required before using `this`.

> **Q4: Why do getters and setters use a backing field like `_password`?**  
> **A:** If the setter assigns to `this.password = value`, it triggers the setter recursively in an infinite loop, causing a `RangeError: Maximum call stack size exceeded`.

---

<h2 id="28-call-apply-and-bind">28. call(), apply(), and bind()</h2>

Used to manually control what `this` refers to inside a function.

| Method | Execution | How Arguments are Passed |
| :--- | :--- | :--- |
| `.call(thisArg, arg1, arg2)` | **Immediately** calls function | Comma-separated list |
| `.apply(thisArg, [args])` | **Immediately** calls function | As an **Array** |
| `.bind(thisArg, arg1, arg2)` | Does **NOT** run immediately; returns a **new function** | Comma-separated list |

```javascript
function showDetails(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
}

const person = { name: "Bhavya" };

// 1. call()
showDetails.call(person, "Surat", "India");

// 2. apply()
showDetails.apply(person, ["Surat", "India"]);

// 3. bind()
const boundFunc = showDetails.bind(person, "Surat", "India");
boundFunc(); // Run whenever needed
```

### 🎯 Interview Q&A

> **Q1: What is the difference between `.call()`, `.apply()`, and `.bind()`?**  
> **A:** `.call()` and `.apply()` invoke the function immediately with custom `this`. `.call()` takes arguments as a comma-separated list, while `.apply()` takes arguments as an array. `.bind()` returns a new copy of the function with bound `this` to run later.

---

<h2 id="29-property-descriptors">29. Property Descriptors & Object.defineProperty()</h2>

Every property in JavaScript has hidden metadata descriptor flags:
- `value`: The actual value.
- `writable`: If `false`, the property value cannot be reassigned.
- `enumerable`: If `false`, the property is hidden in loops (`for...in`, `Object.keys()`).
- `configurable`: If `false`, property flags cannot be changed and it cannot be deleted.

### Why `Math.PI` Cannot Be Overwritten
```javascript
const desc = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(desc);
// { value: 3.14159..., writable: false, enumerable: false, configurable: false }
Math.PI = 5; // Ignored in non-strict mode, throws error in strict mode
```

### Custom Property Descriptors
```javascript
const user = { name: "Bhavya" };

Object.defineProperty(user, "name", {
    writable: false,     // Cannot change value
    enumerable: false    // Will not show up in loops
});

user.name = "Sam";
console.log(user.name); // Still "Bhavya"
console.log(Object.keys(user)); // [] (name is hidden!)
```

### 🎯 Interview Q&A

> **Q1: What are property descriptors in JavaScript?**  
> **A:** They are hidden flags on object properties: `writable` (can change value), `enumerable` (shows in loops/keys), and `configurable` (can delete property or modify descriptor flags).

> **Q2: Why can't we change `Math.PI = 4`?**  
> **A:** In JavaScript's engine, `Math.PI` has its `writable` and `configurable` descriptor flags set to `false`, permanently locking its value.

---

<h2 id="30-advanced-closures">30. Advanced Closures & Practical Patterns</h2>

### Real-World Pattern: Function Factory / Dynamic Handlers
```javascript
function setBodyColor(color) {
    return function() {
        document.body.style.backgroundColor = color;
    };
}

// Click handlers retain the specific color argument via closure
document.getElementById("red-btn").onclick = setBodyColor("red");
document.getElementById("blue-btn").onclick = setBodyColor("blue");
```

### Real-World Pattern: Private State Encapsulation
```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit(amount) {
            balance += amount;
            return `Balance: ${balance}`;
        },
        withdraw(amount) {
            if (amount > balance) return "Insufficient funds";
            balance -= amount;
            return `Balance: ${balance}`;
        },
        getBalance() {
            return balance;
        }
    };
}

const myAcc = createBankAccount(500);
myAcc.deposit(200);
// console.log(myAcc.balance); // undefined (completely protected!)
console.log(myAcc.getBalance()); // 700
```

### 🎯 Interview Q&A

> **Q1: How do closures enable data privacy/encapsulation?**  
> **A:** By creating variables inside an outer function and returning methods that access them, outside code has no direct way to modify those variables except through the exposed methods.

> **Q2: What is a function factory in JavaScript?**  
> **A:** It is a function that returns another function with pre-configured values remembered in its closure (e.g. creating button click handlers for different themes or colors).

---

<h2 id="31-function-currying">31. Function Currying</h2>

Currying transforms a function that takes multiple arguments `f(a, b, c)` into a sequence of functions that each take a single argument `f(a)(b)(c)`.

### Basic Currying
```javascript
// Regular: multiply(2, 3)
// Curried:
const multiply = (a) => (b) => a * b;

const double = multiply(2); // Partial application
console.log(double(5)); // 10
console.log(double(8)); // 16
```

### Real-World Use Case: Configurable API Fetcher
```javascript
const apiRequest = (baseUrl) => (endpoint) => `${baseUrl}/${endpoint}`;

const githubApi = apiRequest("https://api.github.com");
console.log(githubApi("users/octocat")); // "https://api.github.com/users/octocat"
console.log(githubApi("repos/octocat/hello-world"));
```

### Infinite Currying (Interview Question)
```javascript
function add(a) {
    return function(b) {
        if (b !== undefined) {
            return add(a + b);
        }
        return a;
    };
}

console.log(add(1)(2)(3)(4)()); // 10
```

### 🎯 Interview Q&A

> **Q1: What is Currying and why is it useful?**  
> **A:** Currying converts a function with multiple parameters `f(a, b)` into nested single-parameter functions `f(a)(b)`. It allows partial argument application and makes utility functions reusable.

> **Q2: What is infinite currying?**  
> **A:** A pattern where a curried function keeps returning itself to accept more numbers (`add(1)(2)(3)...`) until it is called with empty parentheses `()`, which triggers the final calculation.

---

<h2 id="32-generator-functions">32. Generator Functions (function* & yield)</h2>

Generators are functions that can **pause execution** and **resume later**, returning values on-demand (lazy evaluation).

- Defined using `function*`.
- `yield`: Pauses the function and produces a value.
- `.next()`: Resumes execution and returns an object `{ value: any, done: boolean }`.

```javascript
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

const gen = idGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
```

### 🎯 Interview Q&A

> **Q1: What is a Generator function and how does it work?**  
> **A:** A generator function is declared with `function*`. It pauses execution at `yield` and resumes when `.next()` is called, returning `{ value, done }`.

> **Q2: Why are generators useful for large data streams?**  
> **A:** They compute and produce values on demand (lazy evaluation), which saves memory compared to storing huge arrays of data in memory all at once.

---

<h2 id="33-weakmap--weakset">33. WeakMap & WeakSet</h2>

Both store references to objects **weakly**, meaning they do not prevent their object keys from being garbage-collected when no other references exist.

### 1. WeakMap
- Keys **must be objects** (cannot be strings or numbers).
- If the object key is dereferenced (`obj = null`), its entry is automatically garbage-collected (prevents memory leaks).
- **Not iterable**: No `.forEach()`, no `for...of`, no `.size` property.
- Methods: `.set()`, `.get()`, `.has()`, `.delete()`.

```javascript
const wm = new WeakMap();
let user = { name: "Bhavya" };

wm.set(user, "Metadata info");
console.log(wm.get(user)); // "Metadata info"

user = null; // Object is garbage collected, entry in wm is removed automatically
```

### 2. WeakSet
- Can only store **objects**.
- Elements are weakly held and automatically garbage-collected.
- **Not iterable** and has no `.size`.
- Methods: `.add()`, `.has()`, `.delete()`.

```javascript
const ws = new WeakSet();
let session = { id: "sess_123" };

ws.add(session);
console.log(ws.has(session)); // true

session = null; // Removed from memory automatically
```

### 🎯 Interview Q&A

> **Q1: What is the difference between `Map` and `WeakMap`?**  
> **A:** In `WeakMap`, keys MUST be objects and are held weakly. If an object key has no other reference in code, it is automatically garbage-collected to prevent memory leaks. WeakMaps are not iterable and have no `.size`.

> **Q2: When would you use a `WeakSet`?**  
> **A:** Use `WeakSet` to store a set of objects (such as tracking active DOM elements or visited nodes) without preventing those objects from being garbage-collected when deleted.
